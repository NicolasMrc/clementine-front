<template>
  <v-app>
    <v-container grid-list-md>
      <v-layout row wrap  mt-3>
        <v-flex xs12 text-xs-center>
          <app-logo/>
        </v-flex>
        <v-flex xs12 md8 offset-md2>
          <v-card>
            <v-card-title>
              Clementine Todo List
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-list>
                <transition-group name="list" tag="div">
                  <div v-for="todo in todos" :key="todo.id">
                    <todo :todo="todo" ></todo>
                    <v-divider></v-divider>
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
  </v-app>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import { mapGetters } from 'vuex'
  import Todo from "../components/todo";

  export default {
    components: {
      Todo,
      AppLogo
    },
    async fetch ({ store }) {
      await store.dispatch('todos/getAll');
    },
    computed: mapGetters({
      todos: 'todos/todos'
    }),
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

