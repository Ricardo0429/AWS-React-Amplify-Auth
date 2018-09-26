import { init } from "@rematch/core";
import {auth} from './auth';
import {loading} from './loading';

const store = init({ models: { auth, loading }});

jest.mock('aws-amplify');
const {Auth} = require('aws-amplify');

describe('(Reducers) auth', () => {
      let actual;

      it('Sets the user authentication state', () => {
            store.dispatch.auth.set(true);
            actual = store.getState().auth.loggedIn;
            expect(actual).toEqual(true);
            store.dispatch.auth.set(false);
            actual = store.getState().auth.loggedIn;
            expect(actual).toEqual(false);
      });
});

describe('(Effects) auth', () => {
      let actual;

      it('Sets the user authentication state to false if no current session is found', async () => {
            Auth.currentSession.mockImplementation(() => ({some: 'session'}));
            await store.dispatch.auth.isAuthenticated();
            actual = store.getState().auth.loggedIn;
            expect(actual).toEqual(true);
      });

      it('Sets the user authentication state to true if a current session is found', async () => {
            Auth.currentSession.mockImplementation(() => null);
            await store.dispatch.auth.isAuthenticated();
            actual = store.getState().auth.loggedIn;
            expect(actual).toEqual(false);
      });

      it('Signs user up and executes cb on success', async () => {
            const email = 'some@email.com';
            const password = 'somePwd'
            const onSuccess = jest.fn();
            jest.fn(Auth, 'signUp');
            await store.dispatch.auth.signUp({ email, password, onSuccess });
            expect(Auth.signUp.mock.calls[0][0]).toEqual({ username: email, password });
            expect(Auth.signUp.mock.calls.length).toEqual(1);
            expect(onSuccess.mock.calls.length).toEqual(1);
      });
});