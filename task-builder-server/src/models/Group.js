module.exports = function (sequelize, Sequelize) {
  let Group = sequelize.define('group', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    users: {
      type: Sequelize.JSON,
      allowNull: true
    },
    admin: Sequelize.BOOLEAN
  })
  return Group
}
