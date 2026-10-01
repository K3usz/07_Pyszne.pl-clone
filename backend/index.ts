import express, { response } from "express"
import { initDb } from "./database/database.js"
const app = express()
const port = 3000;

const sequelize = await initDb()
const { User, Courier, Company } = sequelize.models

//app.use(express.json())




app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})