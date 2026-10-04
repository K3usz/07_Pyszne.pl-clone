import { Association, DataTypes, Model, type CreationOptional, type ForeignKey, type HasManyGetAssociationsMixin, type HasManySetAssociationsMixin, type HasOneGetAssociationMixin, type HasOneSetAssociationMixin, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import type { Address } from "./Address.js";
import type { Owner } from "./Owner.js";

const sequelize = await initDb()

export class Company extends Model<InferAttributes<Company>, InferCreationAttributes<Company>> { 
    declare id: CreationOptional<number>;
    declare name: string;
    declare tags: Array<'sushi' | 'burgery'> | null;
    declare NIP: string;
    declare verified: boolean;
    declare ownerId: ForeignKey<number>;

    declare getAddress: HasOneGetAssociationMixin<Address>;
    declare setAddress: HasOneSetAssociationMixin<Address, number>;

    declare static associations: {
        owner: Association<Company, Owner>;
        address: Association<Company, Address>;
    }
}

Company.init(
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
        modelName: 'Company',
    }
)