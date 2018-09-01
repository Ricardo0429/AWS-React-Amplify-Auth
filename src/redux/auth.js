import { Auth } from 'aws-amplify';
import { execEffect } from './index';

const initialState = { validated: false };

export const auth = {
      state: initialState,
      reducers: {
            set (state, payload) {
                  return {...state, loggedIn: payload };
            }
      },
      effects: (dispatch) => ({
            async isAuthenticated() {
                  await execEffect(async () => {
                        const session = await Auth.currentSession();
                        if (session) dispatch.auth.set(true);
                  });
            },

            async signUp(payload) {
                  await execEffect(async () => {
                        const {email: username, password} = payload;
                        await Auth.signUp({ username, password });
                  });
            },

            async confirmSignUp (payload, rootState) {
                  await execEffect(async () => {
                        const { email, password, confirmationCode } = payload;
                        await Auth.confirmSignUp(email, confirmationCode);
                        await dispatch.auth.login({ email, password });
                  });
            },

            async login(payload) {
                  await execEffect(async () => {
                        const { email, password } = payload;
                        await Auth.signIn(email, password);
                        dispatch.auth.set(true);
                  }, e => {
                         // [TODO]: Do we needt that?
                         if (e === 'No current user') return;
                  });
            },

            async logout () {
                  await execEffect(async () => {
                        await Auth.signOut();
                        dispatch.auth.set(false);
                  });
            }
      })
}