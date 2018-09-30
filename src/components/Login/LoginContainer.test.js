import React from 'react';
import Login from './Login';
import {shallow} from 'enzyme';
import {LoginContainer} from './LoginContainer';

describe( '(Container) Login', () => {
      let wrapper, props;

      beforeEach(() => {
            props = { login: jest.fn() };
            wrapper = shallow( <LoginContainer {...props} />);
      });

      test( 'Displays a Login component', () => {
            expect( wrapper.find(Login).length ).toEqual(1);
      });

      //  Login prop: email + password
      it('Passes email and password to Login  component', () => {
            wrapper.setState({ email: 'example@email.com', password: 'Passw0rd!' });
            expect(wrapper.find(Login).props().email).toEqual('example@email.com');
            expect(wrapper.find(Login).props().password).toEqual('Passw0rd!');
      });

      // Logon prop: formIsValid
      it('Passes formIsValid to Logon component', () => {
            expect(wrapper.find(Login).props().formIsValid).toEqual(false);
            wrapper.setState({ email: 'example@email.com', password: 'Passw0rd!' });
            expect(wrapper.find(Login).props().formIsValid).toEqual(true);
      });

      // Login prop: handleChange
      it('Passes a cb prop to user input to Login component', () => {
            wrapper.find(Login).props().handleChange({ target: { id: 'email', value: 'some@email.co' }});
            expect(wrapper.state().email).toEqual('some@email.co');
      });

      //  prop: handleSubmit
      it('Passes a cb prop to handle the submit event to  component', () => {
            wrapper.setState({ email: 'example@email.com', password: 'Passw0rd!' });
            wrapper.find(Login).props().handleSubmit({ preventDefault: () => null });
            expect(props.login.mock.calls.length).toEqual(1);
            expect(props.login.mock.calls[0][0] ).toEqual({ email: 'example@email.com', password: 'Passw0rd!' });
      });
});

