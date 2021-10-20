module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define("Questions", {
        question_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        quiz_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: false,
        },
        question_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    Questions.associate = (models) => {
        Questions.hasMany(models.Answers, {
            onDelete: "cascade",
        });
        Questions.hasMany(models.UserAnswers, {
            onDelete: 'cascade',
        });
        Questions.belongsTo(models.Quizzes);
    };
    
    return Questions;
}
