<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex xs12 md3>
        <v-img :src ="currentUser.image" max-height="250px" max-width="250px">
        </v-img>
      </v-flex>
      <v-flex xs12 md6>
        <v-card class="form">
          <v-form >
            <v-flex xs12>
              <div class="head_toolbar">Личные данные</div>
            </v-flex>
            <v-container>
              <v-layout row wrap>
                <personal-data message="Имя" :contact="currentUser.firstname">
                </personal-data>
                <personal-data message="Фамилия" :contact="currentUser.lastname">
                </personal-data>
                <personal-data message="Дата рождения" :contact="currentUser.date_of_birth">
                </personal-data>
                <personal-data message="Место рождения" :contact="currentUser.place_of_birth">
                </personal-data>
                <personal-data message="Место регистрации" :contact="currentUser.place_of_registration">
                </personal-data>
            <v-flex xs12>
              <div class="head_toolbar">Ключевые навыки</div>
            </v-flex>
                <v-chip class="chipText"  v-for="skill in currentUser.skills" :key="skill.id">{{skill}}</v-chip>
              </v-layout>
            </v-container>
            <v-flex xs12>
              <div class="contacts">Контактные данные</div>
            </v-flex>
            <v-container>
                <personal-data message="Email" :contact="currentUser.email">
                </personal-data>
                <personal-data message="Телефон" :contact="currentUser.phone">
                </personal-data>
                <personal-data message="Рабочий телефон" :contact="currentUser.work_phone">
                </personal-data>
                <personal-data message="Skype" :contact="currentUser.skype">
                </personal-data>
            </v-container>
          </v-form>
        </v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
                  <v-btn  color="success">
                    Редактировать
                  </v-btn>
      </v-card-actions>
      </v-flex>
      <v-flex xs12 md2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PersonalData from '../components/PersonalData'
import { mapState } from 'vuex'

export default {
  components: {
    PersonalData
  },
  props: {
    'id': {
      required: true
    }
  },
  created () {
    this.$store.dispatch('currentUser', this.id)
  },
  computed: {
    ...mapState([
      'currentUser'
    ])
  }
}
</script>

<style lang="stylus">
.form
  border-radius 5px
.head_toolbar, .contacts
  height 40px
  text-align center
  border-bottom 2px solid rgba(194, 194, 194, 0.8)
  font-size 25px
.fname
 border-bottom 1.5px solid rgba(194, 194, 194, 0.3)
.chipText
 font-size 13px
</style>
