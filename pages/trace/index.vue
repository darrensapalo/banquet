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
          Contact Tracing by ID
        </v-card-title>
        <v-card-text>
          Please enter the user's 6 character ID. It follows the format:
          <code>
            00-000
          </code>
        </v-card-text>
        <v-row align="center">
          <v-col>
            <v-row align="center">
              <v-form ref="form" class="form-contact-tracing" @submit="review">
                <v-text-field ref="idField" v-model="formData.id" class="form-field" required label="ID" />
                <div v-if="userPreview !== null" class="user-preview">
                  <v-card-subtitle class="headline">
                    User Preview
                  </v-card-subtitle>
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
                </div>
                <v-card-actions class="bottom-actions">
                  <v-btn
                    :disabled="formData.id === ''"
                    nuxt
                    height="6rem"
                    @click="review()"
                  >
                    Review
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-row>
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
        id: ''
      },
      userPreview: null,
      enabled: false
    }
  },
  mounted () {
    const idField = this.$refs.idField
    idField.focus()
  },
  methods: {
    review (evt) {
      if (evt) {
        evt.preventDefault()
      }
      console.log('Review')

      this.$router.push('/trace/' + this.formData.id)
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
  grid-template-columns: 1fr;
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
