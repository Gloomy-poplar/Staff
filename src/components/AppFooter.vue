<template>
  <div>
    <v-footer :fixed="true" class="pa-3" app>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'RwvFooter'
}
</script>
