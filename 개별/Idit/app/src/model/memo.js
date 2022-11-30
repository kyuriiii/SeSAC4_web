module.exports = (Sequelize, DataTypes) => {
  // Sequelize는 model/index,js에서의 sequelize
  // DataTypes는 model/index.js에서의 Sequelize

  const Memo = Sequelize.define(
    "memo",

    {
      // create ~~ (id int not null auto_increment primary key)ss
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      writedate: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      content: {
        // name varchar(10) not null
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false, // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
      tableName: "memo",
      freezeTableName: true, // table 이름을 바꾸지마..ㅜㅜ
    }
  );

  // Memo.associate = models => {
  //   Memo.belongsTO(models.User, {foreignKey: 'user_id', sourceKey: 'id', onDelete: "cascade",
  //   onUpdate: "cascade"});
  // };
  return Memo;
};

