<template>
  <Page>
    <FlexboxLayout flexDirection="column" JustifyContent="center" backgroundColor="#3c495e">
      <FlexboxLayout flexDirection="column" JustifyContent="center" backgroundColor="#3c495e">
        <TextField v-model="email"  hint="Email" keyboardType="email" />
        <Label class="error" v-if="triedToSignIn && noEmail" v-model="noEmailMsg" />
      </FlexboxLayout>
      <FlexboxLayout flexDirection="column" JustifyContent="center" backgroundColor="#3c495e">
        <TextField v-model="password" hint="Password" secure="true" />
        <Label class="error" v-if="triedToSignIn && noPassword" v-model="noPasswordMsg" />
      </FlexboxLayout>
      <FlexboxLayout flexDirection="column" JustifyContent="center" backgroundColor="#3c495e">
        <Label class="error" v-model="signInErrMsg" />
      </FlexboxLayout>
      <Button text="Sign in" v-on:tap="signIn" />
      <Label text="or" />
      <Button text="Register" />
    </FlexboxLayout>
  </Page>
</template>
<script>
import AuthorizationService from '@/services/AuthorizationService';
import * as http from "http";
export default {
  computed: {
    credentials: function () {
      return {
        'email': this.email,
        'password': this.password
      }
    },
    noEmail: function () {
      return this.email.trim() === ''
    },
    noPassword: function () {
      return this.password.trim() === ''
    }
  },
  data() {
    return {
      email: '',
      password: '',
      noEmailMsg: 'Please enter an email',
      noPasswordMsg: 'Please enter a password',
      triedToSignIn: false,
      signInErrMsg: ''
    }
  },
  methods: {
    signIn: async function () {
      this.triedToSignIn = true
      try {
        const authToken = (await AuthorizationService.signIn(this.credentials)).data
        if(authToken)
        {
        await this.$store.dispatch('user/setUser', authToken)
        }
      } catch (err) {
        this.signInErrMsg = err.message
      }

    }
  }
}

</script>
<style scoped>
.error {
  color: red;
}

</style>
