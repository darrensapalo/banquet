<template>
  <v-data-table
      :headers="headers"
      :items="attendees"
      :items-per-page="5"
      :must-sort="true"
      sort-by="unix"
      class="elevation-1"
  ></v-data-table>
</template>
<script>
  import moment from 'moment';
  export default {

      data() {
          return {
              headers: [
                  {
                    text: "Time slot",
                    sortable: true,
                    value: 'unix',
                    sort: (a, b) => { return a - b; },
                  },
                  {
                      text: "Time slot",
                      align: 'start',
                      sortable: false,
                      value: 'timeslot'
                  },
                  {
                      text: "Name",
                      value: 'name',
                      sortable: false
                  },
                  {
                      text: "Seat",
                      value: 'seat',
                      sortable: false
                  }
              ],
              attendees: [
                  {
                      timeslot: '2020-07-19T00:00:00Z',
                      name: 'Darren Sapalo',
                      seat: '1'
                  },
                  {
                      timeslot: '2020-07-19T00:00:00Z',
                      name: 'Verma Abanilla',
                      seat: '2'
                  },
                  {
                      timeslot: '2020-07-20T00:00:00Z',
                      name: 'John Smith',
                      seat: '3'
                  },
                  {
                      timeslot: '2020-07-21T00:00:00Z',
                      name: 'Jane Smith',
                      seat: '4'
                  }
              ]
                .map((elem) => ({
                    ...elem,
                    unix: moment(elem.timeslot).unix(),
                    timeslot: moment(elem.timeslot).format("dddd, MMMM Do YYYY, h:mm:ss a")
                }))
          }
      },

      head() {
          return {
              title: "Records",
              meta: []
          }
      },
  }
</script>
