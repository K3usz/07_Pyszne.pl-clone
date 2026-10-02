import { DataTypes, Model, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';

const sequelize = await initDb()

class Courier extends Model<InferAttributes<Courier>, InferCreationAttributes<Courier>> {
    declare name: string;
    declare surname: string;
    declare email: string;
    declare phone: string;
    declare nationality: string;
    declare gender: 'male' | 'female' | 'other' | 'not_specified';
    declare birthday: Date;
    declare driving_license: Array<'AM' | 'A1' | 'A2' | 'A' | 'B1' | 'B' | 'B+E'> | null;
}
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
                isAdult(value: Date) {
                    const year = value.getFullYear();
                    const month = value.getMonth();
                    const day = value//TODO skoncz walidacje
                }
            },
        },
        driving_license: {
            type: DataTypes.ARRAY(DataTypes.ENUM('AM', 'A1', 'A2', 'A', 'B1', 'B', 'B+E')),
            allowNull: true,
            validate: {
                //bez duplikatow
            }
        },
        //pojazdy
    },
    {
        sequelize,
        modelName: 'Courier',
    }
)