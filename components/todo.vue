<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="completed"></v-checkbox>
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
        completed : false
      }
    },
    created() {
      this.completed = this.todo.completed
    }
  }
</script>

<style scoped>
  .line-through{
    text-decoration: line-through;
  }
</style>
