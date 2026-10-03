import { Address } from "./models/Address.js";
import { Company } from "./models/Company.js";
import { User } from "./models/User.js";


User.hasMany(Address);
Address.belongsTo(User);

Company.hasOne(Address, { sourceKey: 'id' });
Address.belongsTo(Company, { foreignKey: 'id' });

