module.exports = (sequelize, DataTypes) => {
    const Quizzes = sequelize.define("Quizzes", {
        quiz_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        platform_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        time_limit: {
            type: DataTypes.TIME,
            allowNull: true,
        },
    })

    Quizzes.associate = (models) => {
        Quizzes.hasMany(models.Questions, {
            onDelete: "cascade",
        });
        Quizzes.hasMany(models.History, {
            onDelete: "cascade",
        });
        Quizzes.belongsTo(models.Platforms);
    };
    return Quizzes;
}
