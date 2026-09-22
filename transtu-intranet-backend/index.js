const sequelize = require("./bd"); 
const { DataTypes } = require("sequelize");

const Application = require("./application")(sequelize, DataTypes);
const Document = require("./Document")(sequelize, DataTypes);
const User = require("./user")(sequelize, DataTypes);

User.belongsToMany(Application, { through: 'UserApplications' });
Application.belongsToMany(User, { through: 'UserApplications' });

User.belongsToMany(Document, { through: 'UserDocuments' });
Document.belongsToMany(User, { through: 'UserDocuments' });

Application.hasMany(Document, { onDelete: "CASCADE" });
Document.belongsTo(Application);

module.exports = { sequelize, Application, Document, User };