export const alert = {
      state: false,
      reducers: {
            silence() { return false },
            display(state, message) { return message }
      }
}