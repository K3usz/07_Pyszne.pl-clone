import { DataTypes, Model, type CreationOptional, type ForeignKey, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { initDb } from "../database.js";


const sequelize = await initDb();

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    declare id: CreationOptional<number>;

    declare userId: ForeignKey<number>;
    declare courierId: CreationOptional<ForeignKey<number> | null>;
}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        //TODO
    },{
        sequelize,
        modelName: 'Order',
    }
)
