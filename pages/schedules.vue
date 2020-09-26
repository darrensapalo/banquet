<template>
  <v-layout>
    <v-card style="width: 100%">
      <v-card-title>Mass Schedules</v-card-title>
      <v-card-text>
        <nuxt-content :document="page" />
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('schedules').fetch()

    return {
      page
    }
  },

  head () {
    return {
      title: 'Mass Schedules',
      meta: []
    }
  }
}
</script>
