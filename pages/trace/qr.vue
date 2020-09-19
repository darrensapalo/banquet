<template>
  <v-layout
    column
    justify-center
    align-center
    style="height: 100%"
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card style="height: 100%">
        <v-card-title class="headline">
          Choose Contact Tracing Method
        </v-card-title>
        <v-row align="center">
          <v-col class="trace-option__container">
            <v-btn class="trace-option" height="6rem">
              QR Code Scanner
            </v-btn>

            <v-btn class="trace-option" height="6rem">
              ID
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      formData: {
        name: '',
        seat: '',
        address: '',
        contactNumber: ''
      }
    }
  },
  methods: {
    submit () {
      console.log('Hello world')
    }
  },
  head () {
    return {
      title: 'Attendance Checker',
      meta: []
    }
  }
}
</script>

<style lang="scss" scoped>

.trace-option {
  margin: 10px;

  &__container {
    display: flex;
    flex-direction: column;
  }
}
</style>
