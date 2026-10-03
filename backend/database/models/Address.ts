import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from "../database.js";


const sequelize = await initDb();

export class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {
    declare id: CreationOptional<number>;
    declare city: string;
    declare street: string;
    declare house_number: string;
    declare apt_number: string;
    declare postal_code: string;
}

Address.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        city: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        house_number: {
            type: DataTypes.STRING(8),
            allowNull: false,
        },
        apt_number: {
            type: DataTypes.STRING(8),
            allowNull: true,
        },
        postal_code: {
            type: DataTypes.STRING(6),
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Address',
    }
)
