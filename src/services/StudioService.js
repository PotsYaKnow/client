import Api from '@/services/Api'

export default {
  create(newStudio) {
    return Api().get('studio', newStudio)
  },
  getAll() {
    return Api().get('studio')
  }
}
