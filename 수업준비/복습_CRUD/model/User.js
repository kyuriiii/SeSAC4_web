module.exports = (Sequelize, DataTypes)=> {
    return Sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            pw: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'user',
        }
    )
}