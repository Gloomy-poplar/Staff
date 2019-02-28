<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm4 md4>
        <v-form @submit.prevent="login">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
              <v-text-field prepend-icon="person" v-model="username" type="text"  placeholder="login" required autofocus></v-text-field>
              <v-text-field prepend-icon="lock" v-model="password" type="password"  required>></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit">Login</v-btn>
          </v-card-actions>
        </v-card>
         </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const { username, password } = this
      this.$store.dispatch(AUTH_REQUEST, { username, password })
        .then(() => {
          this.$router.push('/')
        })
    }

  }
}

</script>

<style scoped>

</style>
