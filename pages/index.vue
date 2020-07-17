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
    >

      <v-card>
        <v-card-title class="headline">
          Attendance Sheet
        </v-card-title>
        <v-card-text>
          <p>This attendance sheet is intended for recording for <strong>July 19, 2020, Sunday</strong> for the time slot <strong>5:00 PM</strong>.</p>
        </v-card-text>
        <v-row align="center">
          <v-form ref="form" class="form-contact-tracing">
            <v-text-field v-model="formData.name" class="form-field" required label="Mass Attendee's Name">
            </v-text-field>
            <v-text-field type="number" v-model="formData.seat" class="form-field" required label="Designated Seat">
            </v-text-field>
            <v-text-field v-model="formData.contactNumber" class="form-field" required label="Contact Number">
            </v-text-field>
            <v-textarea v-model="formData.address" class="form-field" required label="Address">
            </v-textarea>
            <v-card-actions>
              <v-spacer />
              <v-btn nuxt
                  to="/records"
              >
                View records
              </v-btn>
              <v-btn
                  color="primary"
                  nuxt
                  @click="submit()"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-row>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>

export default {
  components: {
  },
    data() {
      return {
          formData: {
              name: "",
              seat: "",
              address: "",
              contactNumber: ""
          }
      }
    },
    head() {
        return {
            title: "Attendance Checker",
            meta: []
        }
    },
    methods: {
      submit() {
          console.log("Hello world");
      }
    }
}
</script>
