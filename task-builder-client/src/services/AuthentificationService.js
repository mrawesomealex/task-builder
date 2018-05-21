import Api from '@/services/Api'

export default {
  register (info) {
    return Api().post('register', info)
  },
  enter (info) {
    return Api().post('enter', info)
  },
  autoEnter (info) {
    return Api().post('reenter', info)
  }
}
