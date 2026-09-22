module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Document", {
    title: DataTypes.STRING,
    type: DataTypes.ENUM("PDF", "LINK", "PAGE"),
    url: DataTypes.STRING
  });
};