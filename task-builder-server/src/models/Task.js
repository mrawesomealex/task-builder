module.exports = function (sequelize, Sequelize) {
  let Task = sequelize.define('task', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    beginDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    desc: {
      type: Sequelize.STRING,
      allowNull: true
    },
    finished: Sequelize.BOOLEAN
  })
  return Task
}
