import { DataTypes, Model, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';

const sequelize = await initDb()

export class Vehicles extends Model<InferAttributes<Vehicles>, InferCreationAttributes<Vehicles>> { 
    declare vehicle_type: 'bicycle' | ''; 
    declare brand: string;
    declare model: string;
    declare registration_number: string;
    declare color: string;
    declare in_use: boolean;
}

Vehicles.init(
    {
        vehicle_type:{
            type: DataTypes.ENUM('bicycle', ''), // TODO wiecej typow pojazdow
            allowNull: false,
        },
        brand:{
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        model:{
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        registration_number:{
            type: DataTypes.STRING(8),
            allowNull: true,
        },
        color:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        in_use:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Vehicles',
    }
)