<template>
  <div class="w-full top-0 fixed bg-blue-500 flex justify-around">
    <div class="flex justify-start">
      <router-link :to="{name: 'publicPots'}">
        <button class="bg-transparent
  text-white
  font-semibold  py-2 px-4 border
  border-blue-500">
  Home
        </button>
      </router-link>
      <studioMenu />
    </div>
    <div class="flex justify-end">
      <router-link :to="{name: 'login'}">
        <button v-if="!$store.state.user.isUserLoggedIn" class="btn btn-blue">
          Login
        </button>
      </router-link>
      <router-link :to="{name: 'signup'}">
        <button v-if="!$store.state.user.isUserLoggedIn" class="btn btn-blue">
          Sign Up
        </button>
      </router-link>
      <button v-if="$store.state.user.isUserLoggedIn" class="btn btn-blue" @click="logout">
        Log Out
      </button>
    </div>
  </div>
</template>
<script>
import StudioMenu from './studio/StudioMenu'
import AuthenticationService from '@/services/AuthenticationService'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('user')
export default {
  components: { studioMenu: StudioMenu },
  methods: {
    async logout () {
      try {
        //tell app user is not logged in
        this.$store.dispatch('user/logout')

      } catch (err) {

      }
    }
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.isUserLoggedIn
    })
  },
  async mounted () {
    //does app think user is logged in
    if (this.isUserLoggedIn) {

      //check server to see if cookie is present and valid
      const isUserLoggedIn = (await AuthenticationService.isUserLoggedIn()).data.isUserLoggedIn

      if (!isUserLoggedIn) {
        this.$store.dispatch('user/logout')
        this.$router.push({
          name: 'login'
        })
      }
    }

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
