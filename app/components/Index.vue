<template>
  <Page @loaded="checkIfSignedIn">
    <ActionBar title="Pots, Ya Know?" />
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>
<script>
import SignIn from '../components/authorization/SignIn'

export default {
  computed: {},
  data() {
    return {
      isSignedIn: false,
      msg: 'Pots, Ya Know'
    }
  },
  mounted() {},
  methods: {
    checkIfSignedIn: async function () {
       this.$store.dispatch('user/loadFromStorage')
      console.log(this.$store.state.user.token + ' ')
      if (!this.$store.state.user.token) {
        this.$navigateTo(SignIn)
      }
    }
  }
}
</script>
<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

</style>
