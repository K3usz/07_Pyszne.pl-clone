import express, { response } from "express"
import { getModels, initDb } from "./database/database.js"
const app = express()
const port = 3000;

const sequelize = await initDb()
const { User, Courier, Company } = getModels(sequelize);

//app.use(express.json())


app.post('/register_user', async (req, res) => {
    const {name, surname, email, phone} = req.body;
    if(!name || !surname || !email || !phone) {
        throw Error('Nie podano wszystkich wymaganych argumentów');
    }

    await User.create({
        name: name,
        surname: surname,
        email: email,
        phone: phone,
    })
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})