<template>
  <div v-if="$store.state.user.isUserLoggedIn" style="padding:10px;">
    <span class="
      text-white
      font-semibold" @click="showMenu">
      Studio
    </span>
    <div class="menu" v-if="!hideMenu">
      <div class="subMenu">
        <div class="menu-item" v-for="studio in allStudios">
          <router-link class="inline-block" :to="{name: 'Studio', id: studio.id}">
            {{studio.name}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StudioService from '@/services/StudioService'
export default {

  data() {
    return {
      hideMenu: true,
      allStudios: null
    }
  },

  async mounted () {
    this.allStudios = (await StudioService.getAll()).data
  },

  methods: {
    async showMenu () {
      this.hideMenu = !this.hideMenu
    }
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  position: relative;
  display: block;

}

.subMenu {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background: white;
  padding: 10px;
  top: 10px;
  left: -8px;
}

.menu-item {
  color: black;
  margin-bottom: 10px;
  padding: 10px;
  width: max-content;

}

</style>
