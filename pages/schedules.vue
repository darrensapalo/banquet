<template>
  <v-layout>
    <v-card style="width: 100%">
      <v-card-title>Mass Schedules</v-card-title>
      <v-card-text>
        <nuxt-content :document="page"></nuxt-content>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
  export default {

      head() {
          return {
              title: "Mass Schedules",
              meta: []
          }
      },
      async asyncData({ $content }) {
          const page = await $content('schedules').fetch()

          return {
              page
          }
      }
  }
</script>
