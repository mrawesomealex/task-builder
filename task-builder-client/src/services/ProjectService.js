import Api from '@/services/Api'

export default {
  create (info) {
    return Api().post('/create', info)
  },
  edit (info) {
    return Api().post('/edit', info)
  },
  load (info) {
    return Api().get('/load?name=' + info)
  },
  remove (info) {
    return Api().get('/removeProject?email=' + info.email + '&id=' + info.id)
  }
}
