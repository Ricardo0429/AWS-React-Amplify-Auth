export const alert = {
      state: {},
      reducers: {
            silence() { return false },
            showError(state, message) { return { type: 'danger', message }},
            showSuccess(state, message) { return { type: 'success', message }}
      }
}