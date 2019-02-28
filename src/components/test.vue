<template>
<v-container grid-list-xs>
   <div v-for="(item, index) in users" :key="index">
    <h1>   {{item.firstname}} </h1>
   </div>
   <v-form @submit.prevent="submitProduct($data)">
   <v-flex xs1>

       <v-text-field
      name="name"
      label="name"
      v-model="name"

    ></v-text-field>
     <v-text-field
      name="location"
      label="location"
      v-model="location"
    ></v-text-field>
    <v-btn color="success" type="submit" value="Submit">ADD</v-btn>
      </v-flex>
      </v-form>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      name: '',
      location: ''
    }
  },
  computed: {
    ...mapState([
      'users'
    ])
  },
  methods: {
    ...mapActions({
      submitProduct: 'addUsers'
    })
  }

}

</script>
