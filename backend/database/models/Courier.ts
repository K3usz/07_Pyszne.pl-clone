import { DataTypes, Model, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from '../database.js';

const sequelize = await initDb()

class Courier extends Model<InferAttributes<Courier>, InferCreationAttributes<Courier>> {
    declare name: string;
    declare surname: string;
    declare email: string;
    declare phone: string;
    declare nationality: string;
    declare gender: 'male' | 'female' | 'other' | 'not_specified';
    declare birthday: Date;
    declare driving_license: Array<'AM' | 'A1' | 'A2' | 'A' | 'B1' | 'B' | 'B+E'> | null;
}
Courier.init(
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
            type: DataTypes.ENUM('male', 'female', 'other', 'not_specified'),
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
                    if(value < adult){
                        throw Error('Registering as courier is available only to adults')
                    }
                }
            },
        },
        driving_license: {
            type: DataTypes.ARRAY(DataTypes.ENUM('AM', 'A1', 'A2', 'A', 'B1', 'B', 'B+E')),
            allowNull: true,
            validate: {
                noDuplicates(value: Array<'AM' | 'A1' | 'A2' | 'A' | 'B1' | 'B' | 'B+E'>){
                    if(new Set(value).size != value.length){
                        throw Error('driving_license array does not accept duplicates')
                    }
                }
            }
        },
        //pojazdy
    },
    {
        sequelize,
        modelName: 'Courier',
    }
)