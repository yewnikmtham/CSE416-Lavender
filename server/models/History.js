module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define("History", {
        history_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: true,
        },
    })

    // History.associate = (models) => {

    // };


    return History;
}