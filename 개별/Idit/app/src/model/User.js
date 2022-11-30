// const bcrypt = require('bcrypt');

module.exports = (Sequelize, DataTypes) => {
  // Sequelize는 model/index,js에서의 sequelize
  // DataTypes는 model/index.js에서의 Sequelize

  const User = Sequelize.define(
    'user',

    {
      // create ~~ (id int not null auto_increment primary key)
      id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      
      name: { // name varchar(10) not null
        type: DataTypes.STRING(10),
        allowNull: false
      },

      email: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },

      gender: {
        type: DataTypes.STRING(5),
        allowNull: false
      },

      nickname: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      
      phone_number: {
        type: DataTypes.STRING(15),
        allowNull: false
      }
    },
    {
      timestamps: false, // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
      tableName: 'user',
      freezeTableName: true, // table 이름을 바꾸지마..ㅜㅜ
    });

  //   User.associate = models => {
  //   User.hasMany(models.Memo, {foreignKey: 'user_id', sourceKey: 'id', onDelete: "cascade",
  //   onUpdate: "cascade"})
  // }

  return User;
}




