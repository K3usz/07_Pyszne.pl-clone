import { AddressModel } from "./models/Address.js";
import { CompanyModel } from "./models/Company.js";
import { CourierModel } from "./models/Courier.js";
import { OwnerModel } from "./models/Owner.js";
import { UserModel } from "./models/User.js";
import { VehicleModel } from "./models/Vehicle.js";

CompanyModel.hasOne(AddressModel, { 
    sourceKey: 'id',
    foreignKey: 'companyId',
    as: 'address',
})

AddressModel.belongsTo(CompanyModel, { 
    targetKey: 'id',
    foreignKey: 'companyId',
    as: 'company',
})

UserModel.hasMany(AddressModel, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'addresses',
})

AddressModel.belongsTo(UserModel, {
    targetKey: 'id',
    foreignKey: 'userId',
    as: 'user',
})

CourierModel.hasMany(VehicleModel, {
    sourceKey: 'id',
    foreignKey: 'courierId',
    as: 'vehicles',
})

VehicleModel.belongsTo(CourierModel, {
    targetKey: 'id',
    foreignKey: 'courierId',
    as: 'courier',
})

OwnerModel.hasMany(CompanyModel, {
    sourceKey: 'id',
    foreignKey: 'ownerId',
    as: 'companies',
})

CompanyModel.belongsTo(OwnerModel, {
    targetKey: 'id',
    foreignKey: 'ownerId',
    as: 'owner',
})