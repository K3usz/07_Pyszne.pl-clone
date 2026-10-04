import { Association, DataTypes, Model, type CreationOptional, type ForeignKey, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from "../database.js";
import type { User } from "./User.js";
import type { Company } from "./Company.js";


const sequelize = await initDb();

export class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {
    declare id: CreationOptional<number>;
    declare city: string;
    declare street: string;
    declare house_number: string;
    declare apt_number: string;
    declare postal_code: string;

    declare userId: CreationOptional<ForeignKey<number> | null>;
    declare companyId: CreationOptional<ForeignKey<number> | null>;

    declare static associations: {
        user: Association<Address, User>;
        company: Association<Address, Company>;
    }
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
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: null,
        },
        companyId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: null,
        },
    },
    {
        sequelize,
        modelName: 'Address',
    }
)
