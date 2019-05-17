<template>
    <v-layout row wrap>
      <v-flex xs10>
        <v-text-field :disabled="saving" @keydown.enter="save" solo v-model="title" placeholder="New task title"></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn :disabled="saving" color="success" icon @click="save">
          <v-icon v-if="!saving">save</v-icon>
          <v-progress-circular indeterminate v-else color="success"></v-progress-circular>
        </v-btn>
      </v-flex>
    </v-layout>
</template>

<script>
  export default {
    name: "NewTask",
    data(){
      return{
        title : '',
        saving : false
      }
    },
    methods:{
      async save(){
        if(this.title.trim() !== ''){
          this.saving = true
          await this.$store.dispatch('todos/save', {
            title : this.title,
            completed : false,
          })
          this.title = ''
          this.saving = false
        }
      }
    }
  }
</script>

<style scoped>

</style>
