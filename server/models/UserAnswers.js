module.exports = (sequelize, DataTypes) => {
    const UserAnswers = sequelize.define("UserAnswers", {
        user_ans_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        question_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        answer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    })

    UserAnswers.associate = (models) => {
        UserAnswers.belongsTo(models.Users);
        UserAnswers.belongsTo(models.Questions);
    }
    return UserAnswers;
}
