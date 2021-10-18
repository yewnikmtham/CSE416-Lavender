module.exports = (sequelize, DataTypes) => {
    const Platforms = sequelize.define("Platforms", {
        platform_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
  
        platform_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        banner_photo: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        
        icon_photo: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
    });

    Platforms.associate = (models) => {
        Platforms.hasMany(models.Points, {
            onDelete: "cascade",
        });
        Platforms.hasMany(models.History, {
            onDelete: "cascade",
        });
        // Platforms.hasMany(models.User, {
        //     onDelete: "cascade",
        // });
        Platforms.belongsTo(models.Users)
        Platforms.hasMany(models.Quizzes, {
            onDelete: "cascade",
        });
    };
    //Platforms.belongTo(models.Users)
    return Platforms;
}