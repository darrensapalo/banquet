<template>
  <v-data-table
    :headers="headers"
    :items="attendees"
    :items-per-page="5"
    :must-sort="true"
    sort-by="unix"
    class="elevation-1"
  />
</template>
<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['password']),

    baseUrl () {
    //   return 'http://localhost:2000'
      return 'https://asia-southeast2-olfp-makati.cloudfunctions.net/contactTrace'
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Time slot',
          align: 'start',
          sortable: false,
          value: 'timeslot'
        },
        {
          text: 'Person',
          value: 'name',
          sortable: false
        }
        // {
        //   text: 'Seat',
        //   value: 'seat',
        //   sortable: false
        // }
      ],
      attendees: [

      ]
    }
  },
  mounted () {
    if (this.password === undefined || this.password === null || this.password === '') {
      this.$router.push('/login')
      return
    }
    this.loadData()
  },
  methods: {
    async loadData () {
      const requestUrl = this.baseUrl

      const response = await fetch(requestUrl)
      console.log(response)

      const rows = await response.json()
      console.log('Got rows' + rows.length)

      const responses = rows.map(row => ({
        timeslot: row.created_at,
        name: row.user_id
      }))

      this.attendees = responses
    }
  },

  head () {
    return {
      title: 'Records',
      meta: []
    }
  }
}
</script>
