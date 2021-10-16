module.exports = (sequelize, DataTypes) => {
    const Points = sequelize.define("Points", {
        point_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        points: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    })
    return Points;
}