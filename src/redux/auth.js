import {Auth} from 'aws-amplify';
import routes from '../config/routes';
import * as ms from '../config/messages';
import history from '../history';
import {execEffect} from './index';

export const auth = {
      state: { loggedIn: false },
      reducers: {
            set (state, payload) {
                  return { ...state, loggedIn: payload };
            }
      },

      effects: (dispatch) => ({
            async isAuthenticated() {
                  await execEffect(dispatch, async () => {
                        const session = await Auth.currentSession();
                        dispatch.auth.set(!! session);
                  });
            },

            async signUp(payload) {
                  await execEffect(dispatch, async () => {
                        const {email: username, password} = payload;
                        await Auth.signUp({ username, password });
                        payload.onSuccess();
                  });
            },

            async confirmSignUp (payload, rootState) {
                  await execEffect(dispatch, async () => {
                        const { email, password, confirmationCode } = payload;
                        await Auth.confirmSignUp(email, confirmationCode);
                        await dispatch.auth.login({ email, password });
                  });
            },

            async login(payload) {
                  await execEffect(dispatch, async () => {
                        const { email, password } = payload;
                        await Auth.signIn(email, password);
                        dispatch.auth.set(true);
                  }, e => dispatch.alert.error(e.message));
            },

            async logout () {
                  await execEffect(dispatch, async () => {
                        await Auth.signOut();
                        dispatch.auth.set(false);
                  });
            },

            async forgotPassword ({email, onSuccess}) {
                  await execEffect(dispatch, async () => {
                        await Auth.forgotPassword(email);
                        onSuccess();
                  }, e => dispatch.alert.error(e.message));
            },

            async resetPassword ({ email, confirmationCode, newPassword }) {
                  await execEffect(dispatch, async () => {
                        await Auth.forgotPasswordSubmit(email, confirmationCode, newPassword);
                        history.push(routes.login);
                  }, e => {
                        dispatch.alert.error(e.message);
                  });
            }
      })
};