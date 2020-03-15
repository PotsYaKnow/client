import Api from '@/services/Api'

export default {
  create(newStudio) {
    return Api().post('studio', newStudio)
  },
  getAll() {
    return Api().get('studio')
  }
}
