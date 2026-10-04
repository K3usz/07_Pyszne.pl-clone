import { Association, DataTypes, Model, type CreationOptional, type HasManyAddAssociationMixin, type HasManyAddAssociationsMixin, type HasManyCountAssociationsMixin, type HasManyCreateAssociationMixin, type HasManyGetAssociationsMixin, type HasManyHasAssociationMixin, type HasManyHasAssociationsMixin, type HasManyRemoveAssociationMixin, type HasManyRemoveAssociationsMixin, type HasManySetAssociationsMixin, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import { AllowNull, AutoIncrement } from "@sequelize/core/decorators-legacy";
import type { Address } from "./Address.js";

const sequelize = await initDb()


export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare surname: string;
    declare email: string;
    declare phone: string;

    declare getAddresses: HasManyGetAssociationsMixin<Address>;
    declare addAddress: HasManyAddAssociationMixin<Address, number>;
    declare addAddresses: HasManyAddAssociationsMixin<Address, number>;
    declare setAddresses: HasManySetAssociationsMixin<Address, number>;
    declare removeAddress: HasManyRemoveAssociationMixin<Address, number>;
    declare removeAddresses: HasManyRemoveAssociationsMixin<Address, number>;
    declare hasAddress: HasManyHasAssociationMixin<Address, number>;
    declare hasAddresses: HasManyHasAssociationsMixin<Address, number>;
    declare countAddresses: HasManyCountAssociationsMixin;
    declare createAddress: HasManyCreateAssociationMixin<Address, 'userId'>;

    declare static associations: {
        addresses: Association<User, Address>;
    };
}


User.init(
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
        modelName: 'User',
    }
)