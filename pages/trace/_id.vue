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
        <v-alert v-if="traced" elevation="3" type="success" style="margin: 0 10px; color: white;">
          Successfully traced
        </v-alert>
        <v-alert v-if="notFound" elevation="3" type="error" style="margin: 0 10px; color: white;">
          Did not find a registered user with user ID {{ userId }}.
        </v-alert>
        <v-card-title class="headline">
          User Preview
        </v-card-title>
        <v-card-text>
          Displaying user data for user
          <code>
            {{ userId }}
          </code>
        </v-card-text>
        <v-card-text style="display: flex; flex-direction: column;">
          <label>
            Name:
            <span>
              {{ userPreview.name }}
            </span>
          </label>
          <label>
            Address:
            <span>
              {{ userPreview.address }}
            </span>
          </label>
          <label>
            Mobile Number:
            <span>
              {{ userPreview.mobileNumber }}
            </span>
          </label>
        </v-card-text>
        <div v-if="loading" style="display: flex; justify-content: center; padding: 10px;">
          <v-progress-circular indeterminate />
        </div>
        <v-card-actions class="bottom-actions">
          <v-btn
            :disabled="isLoading  || traced"
            nuxt
            height="6rem"
            to="/"
          >
            Cancel
          </v-btn>
          <v-btn
            :disabled="isLoading || notFound || traced"
            color="primary"
            nuxt
            height="6rem"
            @click="trace()"
          >
            Trace
          </v-btn>
        </v-card-actions>
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
      userId: this.$route.params.id,
      loading: false,
      traced: false,
      notFound: false,
      userPreview: {
        name: '',
        address: '',
        mobileNumber: ''
      }
    }
  },
  computed: {
    isLoading () {
      return this.loading
    },

    baseUrl () {
      // return 'http://localhost:2000'
      return 'https://asia-southeast2-olfp-makati.cloudfunctions.net/contactTrace'
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    review () {
      console.log('Review')
    },

    async loadData () {
      console.log('Loading data into userPreview object')
      this.loading = true

      const userid = this.userId
      const requestUrl = this.baseUrl + '?getUserId=' + userid
      console.log('USERID: ', userid)
      console.log('RequestUrl: ', requestUrl)

      const response = await fetch(requestUrl)

      const jsonResponse = await response.json()

      if (jsonResponse.name && jsonResponse.address && jsonResponse.mobile_number) {
        
        this.userPreview.name = jsonResponse.name
        this.userPreview.address = jsonResponse.address
        this.userPreview.mobileNumber = jsonResponse.mobile_number
      } else {
        this.notFound = true
      }
      this.loading = false
    },
    async trace () {
      this.loading = true
      const userid = this.userId
      const requestUrl = this.baseUrl + '?traceUserId=' + userid
      console.log('USERID: ', userid)
      console.log('RequestUrl: ', requestUrl)

      const response = await fetch(requestUrl)

      if (response) {
        const responseText = await response.text()
        this.loading = false
        this.traced = true
        console.log('Text response: ' + responseText)

        setTimeout(() => {
          this.$router.push('/')
        }, 3000)
      }
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

.bottom-actions {
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;

}

.user-preview {
  display: flex;
  flex-direction: column;
  label {
    font-weight: 700;
    font-size: $font-size-base;
    margin-bottom: 1rem;

    span {
      font-weight: 400;
      font-size: $font-size-base;
    }
  }
}
</style>
