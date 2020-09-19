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
          Contact Tracing by QR
        </v-card-title>
        <v-card-text>
          Please scan the mass attendee's QR code.
        </v-card-text>
        <v-alert v-if="detected" elevation="3" type="success" style="margin: 0 10px; color: white;">
          Successfully detected QR code
        </v-alert>
        <v-row align="center">
          <v-col class="trace-option__container">
            <qrcode-stream @decode="onDecode" />
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  components: {
    QrcodeStream
  },
  data () {
    return {
      detected: false
    }
  },
  methods: {
    onDecode (decodedString) {
      console.log('Detected: ' + decodedString)
      this.detected = true

      setTimeout(() => {
        this.$router.push('/trace/' + decodedString)
      }, 250)
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
