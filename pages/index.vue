<template>
  <v-app>
    <v-container grid-list-md>
      <v-layout row wrap  mt-5>
        <v-flex xs12 text-xs-center>
          <app-logo/>
        </v-flex>
        <v-flex xs12 text-xs-center>
          <h1 class="title">
            Clementine Todo App
          </h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>

</style>

