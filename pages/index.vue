<template>
  <v-app>
    <v-container grid-list-md>
      <v-layout row wrap  mt-3>
        <v-flex xs12 md8 offset-md2 text-xs-center mb-4>
            <h3 class="display-3 grey--text text--darken-3">
              Clementine Todo List
            </h3>
        </v-flex>
        <v-flex xs12 md8 offset-md2 text-xs-center>
          <new-task></new-task>
        </v-flex>
        <v-flex xs12 md8 offset-md2 text-xs-center mb-2>
          <v-checkbox class="text-xs-right"
                      label="Hide completed task ?"
                      v-model="hideCompletedTodos"
          ></v-checkbox>
        </v-flex>
        <v-flex xs12 md8 offset-md2>
          <v-card>
            <v-divider></v-divider>
            <v-card-text>
              <v-list>
                <transition-group name="list" tag="div">
                  <div v-for="(todo, index) in hideCompletedTodos ? remaining : todos" :key="'todo_' + todo.id + '_' + todo.title">
                    <todo :todo="todo" v-on:error="showMessage"></todo>
                    <v-divider v-if="index !== (hideCompletedTodos ? remaining.length - 1 : todos.length - 1 ) "></v-divider>
                  </div>
                </transition-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar v-model="snackbar" :color="snackColor" timeoout="6000">
      {{ snackText }}
      <v-btn color="white" flat @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Todo from "../components/todo";
  import NewTask from "../components/NewTask";

  export default {
    components: {
      NewTask,
      Todo,
    },
    async fetch ({ store }) {
      await store.dispatch('todos/getAll');
    },
    computed: {
      ...mapGetters({
        todos: 'todos/todos'
      }),
      remaining(){
        return this.todos.filter(t => !t.completed)
      }
    },
    data(){
      return{
        hideCompletedTodos : false,
        snackbar : false,
        snackText: '',
        snackColor: '',
      }
    },
    methods:{
      showMessage(text, color){
        this.snackText = text
        this.snackColor = color
        this.snackbar = true
      }
    }
  }
</script>

<style scoped>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all .3s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(20px);
  }
</style>

