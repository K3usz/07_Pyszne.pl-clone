import { DataTypes, Model, type HasManyGetAssociationsMixin, type HasManySetAssociationsMixin, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';
import type { Address } from "./Address.js";

const sequelize = await initDb()

export class Company extends Model<InferAttributes<Company>, InferCreationAttributes<Company>> { 
    declare name: string;
    declare tags: Array<'sushi' | 'burgery'> | null;
    declare NIP: string;
    declare verified: boolean;

    declare getAddress: HasManyGetAssociationsMixin<Address>;
    declare setAddress: HasManySetAssociationsMixin<Address, number>;
    
    
}

Company.init(
    {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.ENUM('sushi', 'burgery',)),//TODO() dodać więcej kategorii
            allowNull: true,
        },
        NIP: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
        },
        //adres, owner.id
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    },
    {
        sequelize,
        modelName: 'Company',
    }
)