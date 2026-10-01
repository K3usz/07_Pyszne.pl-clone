import { DataTypes, Sequelize, Model, UniqueConstraintError } from "sequelize";

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