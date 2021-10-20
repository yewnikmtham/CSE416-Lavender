module.exports = (sequelize, DataTypes) => {
    const Points = sequelize.define("Points", {
        point_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        platform_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            foreignKey: true,
        },
        points: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    })
    Points.associate = (models) => {
        Points.belongsTo(models.User);
        Points.belongsTo(models.Platforms);
    }
    return Points;
}
