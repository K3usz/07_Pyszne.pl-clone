import { Association, DataTypes, Model, type HasManyAddAssociationMixin, type HasManyAddAssociationsMixin, type HasManyCountAssociationsMixin, type HasManyCreateAssociationMixin, type HasManyGetAssociationsMixin, type HasManyHasAssociationMixin, type HasManyHasAssociationsMixin, type HasManyRemoveAssociationMixin, type HasManyRemoveAssociationsMixin, type HasManySetAssociationsMixin, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import type { VehicleModel } from "./Vehicle.js";
import { Driving_license, Genders } from "../enums.js";

const sequelize = await initDb()

export class CourierModel extends Model<InferAttributes<CourierModel>, InferCreationAttributes<CourierModel>> {
    declare name: string;
    declare surname: string;
    declare email: string;
    declare phone: string;
    declare nationality: string;
    declare gender: Genders;
    declare birthday: Date;
    declare driving_license: Array<Driving_license> | null;

    declare getVehicles: HasManyGetAssociationsMixin<VehicleModel>;
    declare addVehicle: HasManyAddAssociationMixin<VehicleModel, number>;
    declare addVehicles: HasManyAddAssociationsMixin<VehicleModel, number>;
    declare setVehicles: HasManySetAssociationsMixin<VehicleModel, number>;
    declare removeVehicle: HasManyRemoveAssociationMixin<VehicleModel, number>;
    declare removeVehicles: HasManyRemoveAssociationsMixin<VehicleModel, number>;
    declare hasVehicle: HasManyHasAssociationMixin<VehicleModel, number>;
    declare hasVehicles: HasManyHasAssociationsMixin<VehicleModel, number>;
    declare countVehicles: HasManyCountAssociationsMixin;
    declare createVehicle: HasManyCreateAssociationMixin<VehicleModel, 'courierId'>;

    declare static associations: {
        vehicles: Association<CourierModel, VehicleModel>;
    }
}
CourierModel.init(
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
            type: DataTypes.ENUM(...Object.arguments(Genders)),
            allowNull: false,
            defaultValue: 'not_specified',
        },
        birthday: {
            type: DataTypes.DATEONLY(),
            allowNull: false,
            validate: {
                isAdult(value: Date) {
                    const adult = new Date(Date.now())
                    adult.setFullYear(adult.getFullYear() - 18);
                    if (value < adult) {
                        throw Error('Registering as courierModel is available only to adults')
                    }
                }
            },
        },
        driving_license: {
            type: DataTypes.ARRAY(DataTypes.ENUM(...Object.values(Driving_license))),
            allowNull: true,
            validate: {
                noDuplicates(value: Array<Driving_license>) {
                    if (value && new Set(value).size != value.length) {
                        throw Error('driving_license array does not accept duplicates')
                    }
                }
            }
        },
    },
    {
        sequelize,
        modelName: 'CourierModel',
    }
)