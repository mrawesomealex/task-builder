import Api from '@/services/Api'

export default {
    load (id) {
      return Api().get('/getGroups?id=' + id)
    },
    add (info) {
      return Api().get('/addGroup?name=' + info.name + '&project=' + info.id)
    }
}