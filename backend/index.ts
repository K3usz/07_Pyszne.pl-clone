import express, { response } from "express"
import { initDb } from "./database/database.js"
import { Op } from "sequelize";
import { UserModel } from "./database/models/User.js";
import { CourierModel } from "./database/models/Courier.js";
import { CompanyModel } from "./database/models/Company.js";
import { OwnerModel } from "./database/models/Owner.js";
import { OrderModel } from "./database/models/Order.js";
import type { VehicleModel } from "./database/models/Vehicle.js";
import type { AddressModel } from "./database/models/Address.js";

const app = express()
const port = 3000;

const sequelize = await initDb()
const { User: User, Courier: Courier, Company: Company, Owner: Owner, Order: Order, Vehicle: Vehicle, Address: Address } = sequelize.models as {
    User: typeof UserModel,
    Courier: typeof CourierModel,
    Company: typeof CompanyModel,
    Owner: typeof OwnerModel,
    Order: typeof OrderModel,
    Vehicle: typeof VehicleModel,
    Address: typeof AddressModel,
}

app.use(express.json())


app.post('/register_user', async (req, res) => {
    try {
        const { name, surname, email, phone } = req.body;

        if (!name || !surname || !email || !phone) {
            throw Error('Nie podano wszystkich wymaganych argumentów');
        }

        if (typeof name !== "string" || typeof surname !== "string" || typeof email !== "string" || typeof phone !== "string") {
            throw Error('Jedno lub wiele pól, są złego typu');
        }

        const existsUser = await UserModel.findOne({
            where: {
                [Op.or]: [
                    { email: email },
                    { phone: phone }
                ]
            }
        })

        if (existsUser) {
            throw Error("User z podanym mailem lub nr telefonu już istnieje")
        }

        const newUser = await User.create({
            name: name,
            surname: surname,
            email: email,
            phone: phone,
        })

        res.status(201).json({
            success: true,
            userId: newUser.id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            details: (error as Error).message,
        })
    }

})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})