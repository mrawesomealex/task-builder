module.exports = function (sequelize, Sequelize) {
  let Project = sequelize.define('project', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    creationDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    desc: {
      type: Sequelize.STRING,
      allowNull: true
    }
  })
  return Project
}
