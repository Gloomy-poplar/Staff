
<template>
   <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md6>
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Регистрация</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form  @submit.prevent="register">
              <v-layout row wrap>
                <v-flex xs12 md4 align-self-center>
                  <v-text-field   label="Имя" type="text" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field prepend-icon="email"   label="E-mail" type="email"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field prepend-icon="lock"   type="password" label="Пароль"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field prepend-icon="lock" type="password" label="Повторите пароль">
                  </v-text-field>
                </v-flex>

              </v-layout>
              <v-card-actions>

                <v-spacer></v-spacer>
                <v-btn color="primary" xs12 >Sign up</v-btn>
              </v-card-actions>
            </v-form>

          </v-card-text>

        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

}

</script>
