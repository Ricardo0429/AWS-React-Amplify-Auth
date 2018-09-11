export const alert = {
      state: {},
      reducers: {
            silence() { return false },
            error(state, message) { return { type: 'danger', message }},
            success(state, message) { return { type: 'success', message }}
      }
}