import { DataTypes, Model } from "sequelize";
import { initDb } from '../database.js';

const sequelize = await initDb()

class Courier extends Model { }
Courier.init(
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
        nationality: {
            type: DataTypes.STRING(2),
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM('male', 'female', 'other', 'not_specified'),
            allowNull: false,
            defaultValue: 'not_specified',
        },
        birthday: {
            type: DataTypes.DATEONLY(),
            allowNull: false,
            validate: {
                //18 lat
            },
        },
        driving_license: {
            type: DataTypes.ARRAY(DataTypes.ENUM('AM', 'A1', 'A2', 'A', 'B1', 'B', 'B+E')),
            allowNull: true,
            validate: {
                //???: bez duplikatow
            }
        },
        //pojazdy
    },
    {
        sequelize,
        modelName: 'Courier',
    }
)