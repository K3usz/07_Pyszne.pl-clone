import { Association, DataTypes, Model, type CreationOptional, type HasManyAddAssociationMixin, type HasManyAddAssociationsMixin, type HasManyCountAssociationsMixin, type HasManyCreateAssociationMixin, type HasManyGetAssociationsMixin, type HasManyHasAssociationMixin, type HasManyHasAssociationsMixin, type HasManyRemoveAssociationMixin, type HasManyRemoveAssociationsMixin, type HasManySetAssociationsMixin, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import { AllowNull, AutoIncrement } from "@sequelize/core/decorators-legacy";
import type { AddressModel } from "./Address.js";

const sequelize = await initDb()


export class UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare surname: string;
    declare email: string;
    declare phone: string;

    declare getAddressModeles: HasManyGetAssociationsMixin<AddressModel>;
    declare addAddressModel: HasManyAddAssociationMixin<AddressModel, number>;
    declare addAddressModeles: HasManyAddAssociationsMixin<AddressModel, number>;
    declare setAddressModeles: HasManySetAssociationsMixin<AddressModel, number>;
    declare removeAddressModel: HasManyRemoveAssociationMixin<AddressModel, number>;
    declare removeAddressModeles: HasManyRemoveAssociationsMixin<AddressModel, number>;
    declare hasAddressModel: HasManyHasAssociationMixin<AddressModel, number>;
    declare hasAddressModeles: HasManyHasAssociationsMixin<AddressModel, number>;
    declare countAddressModeles: HasManyCountAssociationsMixin;
    declare createAddressModel: HasManyCreateAssociationMixin<AddressModel, 'userId'>;

    declare static associations: {
        addressModeles: Association<UserModel, AddressModel>;
    };
}


UserModel.init(
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
        surname: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        //Historia Zamówień
    },
    {
        sequelize,
        modelName: 'UserModel',
    }
)