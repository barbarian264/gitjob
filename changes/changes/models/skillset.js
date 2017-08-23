module.exports = function (sequelize, DataTypes) {
  var Skillset = sequelize.define("Skillset", {
    html: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    css: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    javascript: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    c_sharp: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    node: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    mysql: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    express: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    react: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    mongodb: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    python: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    angular: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    ruby: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });

  Skillset.associate = function (models) {
    Skillset.belongsTo(models.Jobseeker, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Skillset;
};
