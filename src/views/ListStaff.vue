<template>
  <v-container grid-list-md>
    <v-layout row wrap>

      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-container fluid colo>
          <v-layout row>
            <v-flex>
              <v-text-field v-model="search" label="Поиск" id="id"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex v-for="user in users" :key ="user.id" xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card color="info" class="white--text">
          <v-form>
            <v-container fluid class="cont">
              <v-layout row>
                <v-flex xs4 md3>
                  <v-img :src ="user.image" width="150px">
                  </v-img>
                </v-flex>
                <v-flex xs8 md9>
                  <v-card-title>
                    <div>
                      <div class="headline">
                        {{user.firstname}}
                        {{user.lastname}}
                      </div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex align-self-end>
                <div class="delete">

                  <v-btn fab color="#a2c4dd" small icon @click="confirmdelete(user)">
                    <v-icon color="black">delete</v-icon>
                  </v-btn>
                </div>
                  <v-spacer></v-spacer>
                  <v-btn class="primary" flat :to="{name:'Staff',params:{id:user.id}}">Подробнее</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

  <dialog-confirm
  :dialogDelete="confirmDialogVisibility"
  @confirmAccept="deleteUser(selectUser,selectUser.id)"
  @confirmCancel="confirmDialogVisibility = false"
  ></dialog-confirm>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import DialogConfirm from '../components/DialogConfirm'
export default {
  components: {
    'dialog-confirm': DialogConfirm
  },
  data () {
    return {
      search: null,
      confirmDialogVisibility: false,
      selectUser: undefined
    }
  },
  mounted () {
    this.$store.dispatch('loadUsers')
  },
  computed: {
    ...mapState([
      'users'
    ])
  },
  methods: {
    deleteUser (user) {
      this.$store.dispatch('deleteUser', this.selectUser.id)
      this.confirmDialogVisibility = false
    },
    confirmdelete (user) {
      this.selectUser = user
      this.confirmDialogVisibility = true
    }
  }
}
</script>

<style lang="stylus">
.delete
  float right
.cont
  background-color #dae7f1
.headline
  color black
</style>
