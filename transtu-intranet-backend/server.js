require("dotenv").config();
const app = require("./appRoutes");
const { sequelize } = require("./index");

sequelize.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Dtabase no connected", err));

sequelize.sync().then(() => {
  console.log("Models creer");

  app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
  });
  
});
