module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey:true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Users.associate = (models) => {
        Users.hasMany(models.Points, {
            onDelete: "cascade",
        });
        
        Users.hasMany(models.UserAnswers, {
            onDelete: "cascade",
        });
    };
    
    return Users;
}