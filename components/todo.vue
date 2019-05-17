<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-btn icon @click="switchCompletedState">
        <v-icon :disabled="deleting" v-if="!loading" flat :color="todo.completed ? 'primary' : 'grey'">
          {{todo.completed ? 'check' : 'check_box_outline_blank'}}
        </v-icon>
        <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title >
        <span :class="{'line-through' : todo.completed}">{{todo.title}}</span>
        <span v-for="(tag, index) in tags" :key="index" v-if="!contains(tag)" class="tag mr-2" @click="addTag(tag)">#{{tag}}</span>
      </v-list-tile-title>
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
    props : ['todo', 'tags'],
    data() {
      return {
        completed : false,
        loading : false,
        deleting : false,
      }
    },
    created() {
      this.completed = this.todo.completed
    },
    methods:{
      async update(todo){
        try {
          await this.$store.dispatch('todos/update', todo)
        } catch (e) {
          this.$emit('error', 'Error. jsonplaceholder API does not allow you to edit todos you created yourself.', 'error')
        }
      },
      async switchCompletedState(){
        this.loading = true
        await this.update({
          id: this.todo.id,
          title: this.todo.title,
          completed: !this.todo.completed
        })
        this.loading = false
      },
      async remove() {
        this.deleting = true
        await this.$store.dispatch('todos/delete', this.todo.id)
        this.deleting = false
      },
      async addTag(tag){
        await this.update({
          id: this.todo.id,
          title: this.todo.title + ' #' + tag,
          completed: this.todo.completed
        })
      },
      contains(tag){
        return this.todo.title.toLowerCase().includes(tag.toLowerCase())
      }
    },
  }
</script>

<style scoped lang="scss">
  .line-through{
    text-decoration: line-through;
  }

  .tag{
    color: #E0E0E0;
    &:hover{
      color: #4DD0E1;
      cursor: pointer;
    }
  }
</style>
