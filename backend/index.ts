import express, { response } from "express"
import { initDb } from "./database/database.js"
const app = express()
const port = 3000;

const sequelize = await initDb()
const { User, Courier, Company } = sequelize.models

//app.use(express.json())


app.post('/register_user', async (req, res) => {
    const {name, surname, email, phone} = req.body;
    if(!name || !surname || !email || !phone) {
        throw Error('Nie podano wszystkich wymaganych argumentów');
    }

    User?.create()
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})