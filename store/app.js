export const state = () => ({
  password: null
})

export const mutations = {
  setPassword (state, password) {
    state.password = password
  }
}
