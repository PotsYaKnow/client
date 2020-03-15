<template>
  <div class="card" @click="viewStudio">
    <!--studio icon will be above all this centered with margin auto TODO -->
    <!-- view button top right or bottom right -->
    <div class="mx-auto">
      <label class="truncate text-center"> {{studioCardModel.name}}</label>
    </div>
    <hr  />
    <div>
      <div class="potcard-section">
        <label class="card-label">{{studioCardModel.potCount}}</label>
        <label class="card-sublabel">Added Pots</label>
      </div>
      <div class="potcard-section">
        <label class="card-label">{{studioCardModel.lastUpdated}}</label>
        <label class="card-sublabel">Last Updated</label>
      </div>
    </div>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
export default {
  components: {},
  props: ['studioCardModel'],
  methods: {
    viewStudio(studio) {
      this.$router.push({
        name: 'view-studio',
        params: { studioId: studio.id }
      })
    }
  }

}

</script>
<style scoped>


</style>
