import { Association, DataTypes, Model, type CreationOptional, type HasManyAddAssociationMixin, type HasManyAddAssociationsMixin, type HasManyCountAssociationsMixin, type HasManyCreateAssociationMixin, type HasManyGetAssociationsMixin, type HasManyHasAssociationMixin, type HasManyHasAssociationsMixin, type HasManyRemoveAssociationMixin, type HasManyRemoveAssociationsMixin, type HasManySetAssociationsMixin, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import type { CompanyModel } from "./Company.js";

const sequelize = await initDb()

export class OwnerModel extends Model<InferAttributes<OwnerModel>, InferCreationAttributes<OwnerModel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare surname: string;
    declare email: string;
    declare phone: string;

    declare getCompanies: HasManyGetAssociationsMixin<CompanyModel>;
    declare addCompanyModel: HasManyAddAssociationMixin<CompanyModel, number>;
    declare addCompanies: HasManyAddAssociationsMixin<CompanyModel, number>;
    declare setCompanies: HasManySetAssociationsMixin<CompanyModel, number>;
    declare removeCompanyModel: HasManyRemoveAssociationMixin<CompanyModel, number>;
    declare removeCompanies: HasManyRemoveAssociationsMixin<CompanyModel, number>;
    declare hasCompanyModel: HasManyHasAssociationMixin<CompanyModel, number>;
    declare hasCompanies: HasManyHasAssociationsMixin<CompanyModel, number>;
    declare countCompanies: HasManyCountAssociationsMixin;
    declare createCompanyModel: HasManyCreateAssociationMixin<CompanyModel, 'ownerId'>;

    declare static associations: {
        companies: Association<OwnerModel, CompanyModel>;
    }
}

OwnerModel.init(
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
        modelName: 'OwnerModel',
    }
)