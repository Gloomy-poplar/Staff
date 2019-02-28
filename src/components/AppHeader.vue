<template>
  <div>
    <v-toolbar app class='Primary'>
      <v-spacer></v-spacer>
      <v-btn v-for="(item, i) in menuItems" color="primary" class="white--text btn" :key="`menuitem${i}`" :to="item.route">
        <v-icon left v-html="item.icon"></v-icon>
        {{item.title}}
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'RwvHeader',
  computed: {
    menuItems () {
      return [
        {
          icon: 'home',
          title: 'Sign up',
          route: '/register'
        },
        {
          icon: 'lock_open',
          title: 'Login',
          route: '/login'
        },
        {
          icon: 'account_box',
          title: 'MyProfile',
          route: '/profile'

        },
        {
          icon: 'exit_to_app',
          title: 'Logout',
          route: '/logout'
        },
        { icon: 'exit_to_app',
          title: 'posts',
          route: '/posts'
        },
        { icon: 'exit_to_app',
          title: 'test',
          route: '/test'
        },

        {
          icon: 'perm_identity',
          title: 'Список сотрудников',
          route: '/liststaff'
        }

      ]
    }
  }
}
</script>

<style styles>

</style>
