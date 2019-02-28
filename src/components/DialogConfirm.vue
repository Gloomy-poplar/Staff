<template>
    <v-container grid-list-xs>
        <v-layout row justify-center>
            <v-dialog v-model="dialogDelete" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">Удалить сотрудника?</v-card-title>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="confirmCancel">Нет</v-btn>
                <v-btn color="error"  @click="confirmAccept">Да</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'DialogConfirm',
  props: ['dialogDelete'],
  methods: {
    confirmCancel () {
      this.$emit('confirmCancel')
    },
    confirmAccept () {
      this.$emit('confirmAccept')
    }
  }
}
</script>

<style scoped>

</style>
