import { log } from '../services/Log';
import { Auth } from 'aws-amplify';

const execEffect = async (dispatch, action, onError) => {
      try {
            dispatch.loading.start();
            await action();
      } catch (e) {
            if (onError) onError(e);
            log.error(e.message);
      } finally {
            dispatch.loading.stop();
      }
};

export const authenticated = {
      state: false,
      reducers: {
            set(state, payload) {
                  return payload
            }
      },
      effects: (dispatch) => ({
            async isAuthenticated() {
                  await execEffect( dispatch, async () => {
                        const session = await Auth.currentSession();
                        if (session) dispatch.authenticated.set(true);
                  });
            },
            async login(payload, rootState) {
                  await execEffect( dispatch, async () => {
                        const {email, password} = payload;
                        await Auth.signIn(email, password);
                        dispatch.authenticated.set(true);
                  }, e => {
                         // [TODO]: Do we needt that?
                         if (e === 'No current user') return;
                  });
            },
            async logout () {
                  await execEffect( dispatch, async () => {
                        await Auth.signOut();
                        dispatch.authenticated.set(false);
                  })
            }
      })
}