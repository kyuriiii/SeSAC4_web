module.exports = (Sequelize, DataTypes)=> {
    return Sequelize.define(
        'visitor',
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
            comment: {
                type: DataTypes.TEXT('medium'),
                allowNull: true,
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'visitor',
        }
    )
}