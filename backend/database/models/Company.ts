import { Association, DataTypes, Model, type CreationOptional, type ForeignKey, type HasManyGetAssociationsMixin, type HasManySetAssociationsMixin, type HasOneGetAssociationMixin, type HasOneSetAssociationMixin, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import type { AddressModel } from "./Address.js";
import type { OwnerModel } from "./Owner.js";
import type { Tags } from "../enums.js";

const sequelize = await initDb()

export class CompanyModel extends Model<InferAttributes<CompanyModel>, InferCreationAttributes<CompanyModel>> { 
    declare id: CreationOptional<number>;
    declare name: string;
    declare tags: Array<Tags> | null;
    declare NIP: string;
    declare verified: boolean;
    declare ownerId: ForeignKey<number>;

    declare getAddress: HasOneGetAssociationMixin<AddressModel>;
    declare setAddress: HasOneSetAssociationMixin<AddressModel, number>;

    declare static associations: {
        owner: Association<CompanyModel, OwnerModel>;
        address: Association<CompanyModel, AddressModel>;
    }
}

CompanyModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.ENUM('sushi', 'burgery',)),//TODO() dodać więcej kategorii
            allowNull: true,
        },
        NIP: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
        },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'CompanyModel',
    }
)