<template>
    <v-flex xs12 class="fname">
      <v-layout row wrap>
          <v-flex xs12 md3 class="message">
              {{message}}
          </v-flex>
           <v-flex xs12 md6>
            {{contact}}
           </v-flex>
      </v-layout>
    </v-flex>
</template>

<script>
export default {
  props: ['message', 'contact']
}
</script>

<style lang="stylus">
.message
  font-weight bold
</style>
