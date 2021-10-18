module.exports = (sequelize, DataTypes) => {
    const UserAnswers = sequelize.define("UserAnswers", {
        user_ans_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        question_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        answer_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    })
    return UserAnswers;
}