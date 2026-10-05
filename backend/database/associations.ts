import { Address } from "./models/Address.js";
import { Company } from "./models/Company.js";
import { Courier } from "./models/Courier.js";
import { Owner } from "./models/Owner.js";
import { User } from "./models/User.js";
import { Vehicle } from "./models/Vehicle.js";

Company.hasOne(Address, { 
    sourceKey: 'id',
    foreignKey: 'companyId',
    as: 'address',
})

Address.belongsTo(Company, { 
    targetKey: 'id',
    foreignKey: 'companyId',
    as: 'company',
})

User.hasMany(Address, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'addresses',
})

Address.belongsTo(User, {
    targetKey: 'id',
    foreignKey: 'userId',
    as: 'user',
})

Courier.hasMany(Vehicle, {
    sourceKey: 'id',
    foreignKey: 'courierId',
    as: 'vehicles',
})

Vehicle.belongsTo(Courier, {
    targetKey: 'id',
    foreignKey: 'courierId',
    as: 'courier',
})

Owner.hasMany(Company, {
    sourceKey: 'id',
    foreignKey: 'ownerId',
    as: 'companies',
})

Company.belongsTo(Owner, {
    targetKey: 'id',
    foreignKey: 'ownerId',
    as: 'owner',
})