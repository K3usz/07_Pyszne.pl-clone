import { DataTypes, Sequelize, Model, UniqueConstraintError, type InferAttributes, type InferCreationAttributes } from "sequelize";

export async function initDb() {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'database.sqlite'
    })

    try {
        await sequelize.authenticate()
        console.log("Połączenie z bazą danych powidoło się")
    } catch (e) {
        console.error("Nie udało się połączyć z bazą", e)
        process.exit()
    }



    await sequelize.sync({ force: true });

    return sequelize;
}

export function getModels(sequelize: Sequelize) {
    const { User, Courier, Company, Address, Owner, Vehicle, Order } = sequelize.models;
    
    if(User && Courier && Company && Address && Owner && Vehicle && Order){
        return { User, Courier, Company, Address, Owner, Vehicle, Order };
    }else{
        throw 5;
    }

}