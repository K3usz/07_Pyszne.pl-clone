import { DataTypes, Model } from "sequelize";
import { initDb } from '../database.js';

const sequelize = await initDb()

export class User extends Model { }
User.init(
    {
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