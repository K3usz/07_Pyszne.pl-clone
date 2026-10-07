import { Association, DataTypes, Model, type ForeignKey, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import type { CourierModel } from "./Courier.js";
import { Vehicle_types } from "../enums.js";

const sequelize = await initDb()

export class VehicleModel extends Model<InferAttributes<VehicleModel>, InferCreationAttributes<VehicleModel>> { 
    declare vehicle_type: Vehicle_types; 
    declare brand: string;
    declare model: string;
    declare registration_number: string;
    declare color: string;
    declare in_use: boolean;

    declare courierId: ForeignKey<number>;

    declare static associations: {
        courierModel: Association<VehicleModel, CourierModel>;
    }
}

VehicleModel.init(
    {
        vehicle_type:{
            type: DataTypes.ENUM(...Object.arguments(Vehicle_types)),
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
        modelName: 'VehicleModel',
    }
)