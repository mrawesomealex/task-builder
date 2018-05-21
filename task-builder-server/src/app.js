const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const env = require('dotenv')
env.load()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//  Models
const models = require('./models')

//  Sync Database
models.sequelize.sync().then(
  res => {
    console.log('База данных подключена')
    app.listen(8081, (err) => {
      console.log(!err ? 'Приложение запущено' : err)
    })
  },
  err => {
    console.error('Ошибка подключения к БД: ' + err)
  }
)
require('./routes')(app, models.user, models.project, models.sprint, models.group, models.task)
