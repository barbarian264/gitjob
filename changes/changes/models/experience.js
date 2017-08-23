module.exports = function(sequelize, DataTypes) {
  var Experience = sequelize.define("Experience", {
      novice: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      junior: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,        
      },
      midLevel: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,        
      },
      senior: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,        
      },
      allpro: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,        
      }     

  });

  Experience.associate = function(models){
    Experience.belongsTo(models.Jobseeker,{
        foreignKey: {
            allowNull: false
        }
    });
  };

  return Experience;
};
