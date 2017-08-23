module.exports = function(sequelize, DataTypes) {
  var Jobseeker = sequelize.define("Jobseeker", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],         
        notEmpty: true           
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [5],
        isEmail: true,    
        notEmpty: true      
      }
    },
    github: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10],          
        isUrl: true,   
        notEmpty: true      
      }
    },
    linkedin: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10],          
        isUrl: true,     
        notEmpty: true   
      }
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isNumeric: true   
      }
    }
  });

  //1 to many
  Jobseeker.associate = function(models) {
    Jobseeker.hasMany(models.Skillset, {
      onDelete: "cascade"
    });

    Jobseeker.hasMany(models.Education, {
      onDelete: "cascade"
    });

    Jobseeker.hasOne(models.Experience, {
      onDelete: "cascade"
    });

    Jobseeker.hasMany(models.Project, {
      onDelete: "cascade"
    });
  };

  return Jobseeker;
};
