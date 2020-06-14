import Api from '@/services/Api'

export default {
  signIn(credentials) {
    return Api().post('signin', credentials)
  },
  register(credentials) {
    return Api().post('register', credentials)
  },
  isUserLoggedIn() {
    return Api().get('isUserLoggedIn')
  }
}
