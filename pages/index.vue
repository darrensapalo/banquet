<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
      class="full-space"
    >
      <v-card class="full-space">
        <v-card-title class="headline">
          Choose Contact Tracing Method
        </v-card-title>
        <v-row align="center">
          <v-col class="trace-option__container">
            <v-btn class="trace-option" height="6rem" to="trace/qr">
              QR Code Scanner
            </v-btn>

            <v-btn class="trace-option" height="6rem" to="trace">
              ID
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState('app', ['password'])
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
  mounted () {
    if (this.password === undefined || this.password === null || this.password === '') {
      this.$router.push('/login')
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
