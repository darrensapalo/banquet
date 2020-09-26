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
          Log In
        </v-card-title>
        <v-card-text>
          Only authorized users of this contact tracing application are allowed to use this website.
          <v-alert v-if="error !== null && error !== undefined && error !== ''" ref="errorAlert" type="error">
            {{ error }}
          </v-alert>
        </v-card-text>
        <v-row align="center">
          <v-col>
            <v-row align="center">
              <v-form ref="form" class="form-contact-tracing" @submit="login">
                <v-text-field ref="idField" v-model="password" type="password" class="form-field" required label="Password" />
                <v-card-actions class="bottom-actions">
                  <v-btn
                    :disabled="password === ''"
                    nuxt
                    height="6rem"
                    width="25%"
                    @click="login()"
                  >
                    Log in
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

import { mapMutations } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      password: '',
      error: null
    }
  },
  mounted () {
    const password = this.$store.password

    console.log('Password: ' + password)
  },
  methods: {
    ...mapMutations('app', ['setPassword']),
    submit () {

    },
    login (e) {
      if (e) {
        e.preventDefault()
      }
      const MASTER_PASSWORD = 'septemberEightFatima'

      if (this.password === MASTER_PASSWORD) {
        this.setPassword(this.password)
        console.log('Moving user to original route')
        this.$router.push('/')
      } else {
        this.error = 'Incorrect password'
        this.password = ''
        setTimeout(() => {
          this.$refs.errorAlert.toggle()
        }, 2000)
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
</style>
