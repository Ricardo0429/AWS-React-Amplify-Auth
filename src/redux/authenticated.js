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
                  try {
                        dispatch.loading.start();
                        const session = await Auth.currentSession();
                        if (session) dispatch.authenticated.set(true);
                        log.info(session);
                  } catch (e) {
                        log.error(e.message);
                  } finally {
                        dispatch.loading.stop();
                  }
            },
            async login(payload, rootState) {
                  await execEffect( dispatch, async () => {
                        const {email, password} = payload;
                        const result = await Auth.signIn(email, password);
                        log.info(result);
                        dispatch.authenticated.set(true);
                  }, e => {
                         // [TODO]: Do we needt that?
                         if (e === 'No current user') return;
                  });
            },
            async logout () {
                  try {
                        dispatch.loading.start();
                        await Auth.signOut();
                        dispatch.authenticated.set(false);
                  } catch (e) {
                        log.error(e.message);
                  } finally {
                        dispatch.loading.stop();
                  }
            }
      })
}