module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define("Questions", {
        question_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
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
    };
    
    return Questions;
}