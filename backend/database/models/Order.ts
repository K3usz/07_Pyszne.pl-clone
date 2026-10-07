import { DataTypes, Model, type CreationOptional, type ForeignKey, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from "../database.js";


const sequelize = await initDb();

export class OrderModel extends Model<InferAttributes<OrderModel>, InferCreationAttributes<OrderModel>> {
    declare id: CreationOptional<number>;

    declare userId: ForeignKey<number>;
    declare courierId: CreationOptional<ForeignKey<number> | null>;
}

OrderModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        //TODO
    },{
        sequelize,
        modelName: 'OrderModel',
    }
)
