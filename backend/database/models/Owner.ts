import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';

const sequelize = await initDb()

export class Owner extends Model<InferAttributes<Owner>, InferCreationAttributes<Owner>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare surname: string;
    declare email: string;
    declare phone: string;
}

Owner.init(
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
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(16),
            allowNull: false,
        }

    },
    {
        sequelize,
        modelName: 'Owner',
    }
)