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
          User Preview
        </v-card-title>
        <v-card-text>
          Displaying user data for user
          <code>
            {{ formData.id }}
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
        <v-card-actions class="bottom-actions">
          <v-btn
            nuxt
            height="6rem"
            to="/select-method"
          >
            Cancel
          </v-btn>
          <v-btn
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
      formData: {
        id: this.$route.params.id
      },
      userPreview: {
        name: 'None',
        address: 'None',
        mobileNumber: 'None'
      }
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    review () {
      console.log('Review')
    },

    loadData () {
      console.log('Loading data into userPreview object')
      this.userPreview.name = 'Darren Sapalo'
      this.userPreview.address = 'Makati'
      this.userPreview.mobileNumber = '09171234567'
    },
    trace () {
      console.log('Trace')
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
