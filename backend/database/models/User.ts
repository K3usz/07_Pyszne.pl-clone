import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import { AllowNull, AutoIncrement } from "@sequelize/core/decorators-legacy";

const sequelize = await initDb()


export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> { 
    declare id: CreationOptional<number>;
    declare name: string;
    declare surname: string;
    declare email: string;
    declare phone: string;
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
        //Adresy, Historia Zamówień
    },
    {
        sequelize,
        modelName: 'User',
    }
)