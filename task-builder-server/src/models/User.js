
module.exports = function (sequelize, Sequelize) {
  let User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    accessToken: Sequelize.STRING,
    refreshToken: Sequelize.STRING,
    creationDate: {
      type: Sequelize.DATE,
      allowNull: true
    }
  })

  return User
}
