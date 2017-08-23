module.exports = function(sequelize, DataTypes){
    var Education = sequelize.define("Education",{
        highSchool: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
          },
          college: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,        
          },
          compScience: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,        
          },
          masters: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,        
          },
          selftaught: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,        
          },
          bootcamp: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,        
          }
    });

    

    Education.associate = function(models){
        Education.belongsTo(models.Jobseeker,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Education;
};