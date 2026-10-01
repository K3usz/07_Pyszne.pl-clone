import { DataTypes, Model } from "sequelize";
import { initDb } from '../database.js';

const sequelize = await initDb()

export class Owner extends Model { }
Owner.init(
    {
        name:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        surname:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phone:{
            type: DataTypes.STRING(16),
            allowNull: false,
        }

    },
    {
        sequelize,
        modelName: 'Owner',
    }
)