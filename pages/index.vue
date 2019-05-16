<template>
  <v-app>
    <v-container grid-list-md>
      <v-layout row wrap  mt-5>
        <v-flex xs12 text-xs-center>
          <app-logo/>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              Clementine Todo List
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-list>
                  <todo v-for="todo in todos" :key="todo.id" :todo="todo" ></todo>
              </v-list>
            </v-card-text>
          </v-card>
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

</style>

