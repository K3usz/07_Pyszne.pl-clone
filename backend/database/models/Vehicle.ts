import { Association, DataTypes, Model, type ForeignKey, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import type { Courier } from "./Courier.js";

const sequelize = await initDb()

export class Vehicle extends Model<InferAttributes<Vehicle>, InferCreationAttributes<Vehicle>> { 
    declare vehicle_type: 'bicycle' | ''; 
    declare brand: string;
    declare model: string;
    declare registration_number: string;
    declare color: string;
    declare in_use: boolean;

    declare courierId: ForeignKey<number>;

    declare static associations: {
        courier: Association<Vehicle, Courier>;
    }
}

Vehicle.init(
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
        modelName: 'Vehicle',
    }
)