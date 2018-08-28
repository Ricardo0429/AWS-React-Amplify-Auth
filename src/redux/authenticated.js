export const authenticated = {
      state: false,
      reducers: {
            set(state, payload) {
                  return payload
            }
      },
      effects: (dispatch) => ({
            isAuthenticated() {
                  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
                  const accessToken = localStorage.getItem('access_token');
                  const validToken = accessToken && (new Date().getTime() < expiresAt);
                  dispatch.authenticated.set(validToken);
            },
            async setSession(payload, rootState) {
                  dispatch.loading.start();
                  const { expiresIn, accessToken, idToken } = payload;
                  // Set the time that the Access Token will expire at
                  // [TODO]: replaced with jwt-decode ?
                  let expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
                  localStorage.setItem('id_token', idToken);
                  localStorage.setItem('access_token', accessToken);
                  localStorage.setItem('expires_at', expiresAt);
                  dispatch.authenticated.set(true);
                  dispatch.loading.stop();
            },
            logout () {
                  localStorage.removeItem('access_token');
                  localStorage.removeItem('id_token');
                  localStorage.removeItem('expires_at');
                  // navigate to the home route
                  dispatch.authenticated.set(false);
            }
      })
}