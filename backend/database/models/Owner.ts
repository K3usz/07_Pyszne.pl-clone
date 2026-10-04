import { Association, DataTypes, Model, type CreationOptional, type HasManyAddAssociationMixin, type HasManyAddAssociationsMixin, type HasManyCountAssociationsMixin, type HasManyCreateAssociationMixin, type HasManyGetAssociationsMixin, type HasManyHasAssociationMixin, type HasManyHasAssociationsMixin, type HasManyRemoveAssociationMixin, type HasManyRemoveAssociationsMixin, type HasManySetAssociationsMixin, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import type { Company } from "./Company.js";

const sequelize = await initDb()

export class Owner extends Model<InferAttributes<Owner>, InferCreationAttributes<Owner>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare surname: string;
    declare email: string;
    declare phone: string;

    declare getCompanies: HasManyGetAssociationsMixin<Company>;
    declare addCompany: HasManyAddAssociationMixin<Company, number>;
    declare addCompanies: HasManyAddAssociationsMixin<Company, number>;
    declare setCompanies: HasManySetAssociationsMixin<Company, number>;
    declare removeCompany: HasManyRemoveAssociationMixin<Company, number>;
    declare removeCompanies: HasManyRemoveAssociationsMixin<Company, number>;
    declare hasCompany: HasManyHasAssociationMixin<Company, number>;
    declare hasCompanies: HasManyHasAssociationsMixin<Company, number>;
    declare countCompanies: HasManyCountAssociationsMixin;
    declare createCompany: HasManyCreateAssociationMixin<Company, 'ownerId'>;

    declare static associations: {
        companies: Association<Owner, Company>;
    }
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