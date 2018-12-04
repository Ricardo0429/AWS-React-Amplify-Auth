export default {
      state: {},
      reducers: {
            silence() {
                  return {};
            },
            error(state, message) {
                  return { type: "danger", message };
            },
            success(state, message) {
                  return { type: "success", message };
            }
      }
};
