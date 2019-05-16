<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-btn icon @click="update">
        <v-icon v-if="!loading" flat :color="todo.completed ? 'primary' : 'grey'">
          {{todo.completed ? 'check' : 'check_box_outline_blank'}}
        </v-icon>
        <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title :class="{'line-through' : todo.completed}">{{todo.title}}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    name: "todo",
    props : ['todo'],
    data() {
      return {
        completed : false,
        loading : false
      }
    },
    created() {
      this.completed = this.todo.completed
    },
    methods:{
      async update(){
        this.loading = true
        await this.$store.dispatch('todos/update', {
          id : this.todo.id,
          title : this.todo.title,
          completed : !this.todo.completed
        })
        this.loading = false
      }
    },
  }
</script>

<style scoped>
  .line-through{
    text-decoration: line-through;
  }
</style>
