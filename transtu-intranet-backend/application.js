module.exports= (sequelize, DataTypes) => {
  return sequelize.define("Application", {
    code: { 
        type: DataTypes.STRING, 
        unique: true, 
        allowNull: false 
    },
    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    category: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    description: DataTypes.TEXT,
    accessUrl: DataTypes.STRING,
    units: DataTypes.JSON,
    activeUsers: DataTypes.INTEGER,
    audience: DataTypes.STRING,
    supportContact: DataTypes.STRING,
    developedBy: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    maintainedBy: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    ownerBusiness: DataTypes.STRING,
    ownerTechnical: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE"
    }
  });
};