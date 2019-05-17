<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-btn icon @click="update">
        <v-icon :disabled="deleting" v-if="!loading" flat :color="todo.completed ? 'primary' : 'grey'">
          {{todo.completed ? 'check' : 'check_box_outline_blank'}}
        </v-icon>
        <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title :class="{'line-through' : todo.completed}">{{todo.title}}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn icon @click="remove">
        <v-icon :disabled="loading" v-if="!deleting" flat color="error">
          delete
        </v-icon>
        <v-progress-circular v-else indeterminate color="error lighten-1"></v-progress-circular>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  export default {
    name: "todo",
    props : ['todo'],
    data() {
      return {
        completed : false,
        loading : false,
        deleting : false
      }
    },
    created() {
      this.completed = this.todo.completed
    },
    methods:{
      async update(){
        this.loading = true
        try {
          await this.$store.dispatch('todos/update', {
            id: this.todo.id,
            title: this.todo.title,
            completed: !this.todo.completed
          })
        } catch (e) {
          this.$emit('error', 'Error. jsonplaceholder API does not allow you to edit todos you created yourself.', 'error')
        }
        this.loading = false
      },
      async remove(){
        this.deleting = true
        await this.$store.dispatch('todos/delete', this.todo.id)
        this.deleting = false
      }
    },
  }
</script>

<style scoped>
  .line-through{
    text-decoration: line-through;
  }
</style>
