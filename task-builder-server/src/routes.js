const bcrypt = require('bcrypt')
// const Sequelize = require('sequelize')
// const Op = Sequelize.Op

module.exports = (app, User, Project, Sprint, Group, Task) => {
  app.post('/register', (req, res) => {
    let uData = req.body
    User.findOne({
      where: {
        email: uData.email
      }
    }).then(user => {
      if (user) {
        res.send({
          error: 'Юзер уже существует. Войдите или используйте другой email'
        })
      } else {
        bcrypt.hash(uData.password, 8).then(hash => {
          User.create({
            email: uData.email,
            username: uData.username,
            password: hash
          }).then(user => {
            let text = user ? 'Аккаунт создан успешно!' : 'При создании аккаунта произошла ошибка! Попробуйте еще раз.'
            res.send({message: text})
          })
        })
      }
    })
  })
  app.post('/enter', (req, res) => {
    let uData = req.body
    User.findOne({
      where: {
        email: uData.email
      }
    }).then(user => {
      if (user) {
        if (bcrypt.compareSync(uData.password, user.password)) {
          // (new Date() - new Date(uData.dateCreated)) / 36e5
          // успешная авторизация
          bcrypt.hash(uData.dateCreated, 8).then(hash => {
            user.set('accessToken', hash)
            bcrypt.hash(uData.dateCreated + 60, 8).then(hash => {
              user.set('refreshToken', hash)
              user.set('creationDate', uData.dateCreated)
              user.save()
              res.send({
                access: user.accessToken,
                refresh: user.refreshToken,
                created: user.creationDate,
                email: user.email,
                username: user.username
              })
            })
          })
        } else {
          res.send({error: 'invalidPassword'})
        }
      } else {
        res.send({error: 'invalidEmail'})
      }
    })
  })
  app.post('/reenter', (req, res) => {
    let uData = req.body
    User.findOne({
      where: {
        email: uData.email
      }
    }).then(user => {
      if (user) {
        if (user.accessToken !== uData.accessToken) {
          res.send({access: user.accessToken})
        } else {
          bcrypt.hash(uData.created + 60, 8).then(hash => {
            user.set('accessToken', hash)
            user.set('creationDate', uData.created)
            user.save()
            res.send({access: hash})
          })
        }
      } else {
        res.send({error: 'Данный пользователь отсутвует в базе'})
      }
    })
  })
  app.get('/load', (req, res) => {
    User.findOne({
      where: {
        email: req.query.name
      }
    }).then(user => {
      if (user) {
        user.getProjects().then(results => {
          if (results.length) {
            res.send(results)
          } else {
            res.send({message: 'Нет проектов у данного юзера'})
          }
        })
      } else {
        res.send({error: 'Юзер не зарегистрирован'})
      }
    })
  })
  /* -----------------------------------------------------------
    Точки проекта
  ----------------------------------------------------------- */
  app.post('/create', (req, res) => {
    let uData = req.body
    User.findOne({
      where: {
        email: uData.email
      }
    }).then(user => {
      if (user) {
        user.getProjects({
          where: {
            name: uData.name
          }
        }).then(project => {
          if (project.length) {
            res.send({error: 'У вас уже есть проект с таким именем'})
          } else {
            Project.create({
              name: uData.name,
              creationDate: uData.creationDate,
              desc: uData.desc
            }).then(project => {
              user.addProject(project).then(() => {
                Group.create({
                  name: 'admin_' + project.id,
                  admin: true
                }).then((group) => {
                  let obj = [user.username]
                  group.update({users: JSON.stringify(obj)})
                  project.addGroup(group)
                  res.send({message: 'Новый проект ' + uData.name + ' был создан!'})
                })
              })
            })
          }
        })
      } else {
        res.send({error: 'Юзер не зарегистрирован'})
      }
    })
  })
  app.get('/removeProject', (req, res) => {
    User.findOne({
      where: {
        email: req.query.email
      }
    }).then((user) => {
      user.getProjects({
        where: {
          id: req.query.id
        }
      }).then(project => {
        if (!project.length) {
          res.send({error: 'Произошла ошибка во время удаления'})
        } else {
          project[0].destroy({cascade: true}).then(() => {
            res.send('Проект удален!')
          })
        }
      })
    })
  })
  app.post('/edit', (req, res) => {
    let uData = req.body
    Project.update({
      name: uData.name,
      desc: uData.desc
    }, {where: { id: uData.id }}).then((project) => {
      res.send(project)
    })
  })
  /* -----------------------------------------------------------
    Точки спринта
  ----------------------------------------------------------- */
  app.get('/getGroups', (req, res) => {
    Project.findOne({
      where: {
        id: req.query.id
      }
    }).then((project) => {
      project.getGroups().then((results) => {
        res.send(results)
      })
    })
  })
  /* -----------------------------------------------------------
    Точки таска
  ----------------------------------------------------------- */
  /* -----------------------------------------------------------
    Точки
  ----------------------------------------------------------- */
}
