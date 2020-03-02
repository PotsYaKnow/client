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

     <studioMenu/>

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
export default {
components: { studioMenu: StudioMenu },
  methods: {
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
