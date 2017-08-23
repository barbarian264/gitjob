module.exports = function(sequelize,DataTypes){
    var Project = sequelize.define("Project",{
        url: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
              len: [10],          
              isUrl: true,      
              notEmpty: true      
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    Project.associate = function(models){
        Project.belongsTo(models.Jobseeker,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Project;
;}