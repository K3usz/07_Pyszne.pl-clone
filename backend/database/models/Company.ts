import { DataTypes, Model } from "sequelize";
import { initDb } from '../database.js';

const sequelize = await initDb()

class Company extends Model { }
Company.init(
    {
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
        //adres, owner.id
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    },
    {
        sequelize,
        modelName: 'Company',
    }
)