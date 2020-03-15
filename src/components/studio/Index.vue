<template>
  <div class="container mx-auto">
    <div>
      <router-link :to="{name: 'studioCreation'}">
        <button class="btn btn-blue">Create Studio</button>
      </router-link>
      <div class="card-container">
      <div  v-for="studio in allStudios">
        <studiocard v-bind:studioCardModel="studio" />
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import StudioCard from './StudioCard'
import StudioService from '@/services/StudioService'
export default {
  name: 'Index',
  components: { studiocard: StudioCard },
  data() {
    return {
      allStudios: []
    }
  },
  async mounted () {
    this.allStudios = (await StudioService.getAll()).data
  },

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
