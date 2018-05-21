const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]

var db = {}

var sequelize = new Sequelize(
  'taskbuilderdb',
  config.username,
  config.password,
  config
)

let model
// подключение модулей
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach((file) => {
    model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db['user'].hasMany(db['project'], {onDelete: 'CASCADE'})
db['project'].hasMany(db['sprint'], {onDelete: 'CASCADE'})
db['project'].hasMany(db['group'], {onDelete: 'CASCADE'})
db['sprint'].hasMany(db['task'], {onDelete: 'CASCADE'})
db['user'].belongsToMany(db['task'], {onDelete: 'CASCADE', through: 'UserTask'})
db['task'].belongsToMany(db['user'], {onDelete: 'CASCADE', through: 'UserTask'})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
