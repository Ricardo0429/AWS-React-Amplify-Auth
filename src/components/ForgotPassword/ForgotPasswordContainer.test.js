import React from 'react';
import {Formik} from 'formik';
import {shallow} from 'enzyme';
import ForgotPassword from './ForgotPassword';
import validationSchema from './validationSchema';
import ForgotPasswordSubmit from './ForgotPasswordSubmit';
import {ForgotPasswordContainer} from './ForgotPasswordContainer';

describe( '(Container) ForgotPassword', () => {
      let wrapper, props;

      beforeEach(() => {
            props = {
                  forgotPassword: jest.fn(),
                  dispatch: {
                        auth: {
                              resetPassword: jest.fn()
                        }
                  }
            };
            wrapper = shallow( <ForgotPasswordContainer { ...props } />);
      });

      // ForgotPassword
      it( 'Displays a ForgotPassword component', () => {
            expect( wrapper.find(ForgotPassword).length ).toEqual( 1 );
      });

      // ForgotPassword prop: value
      it('Passes user input value to ForgotPassword component', () => {
            wrapper.setState({ value: 'value' });
            expect(wrapper.find(ForgotPassword).props().value).toEqual('value');
      });

      // ForgotPassword prop: onChange
      it('Passes a cb prop to handle the onChange event to ForgotPassword component', () => {
            wrapper.find(ForgotPassword).props().onChange({ target: { value:'arg' }});
            expect(wrapper.state().value).toEqual('arg');
      });

      // ForgotPassword prop: onSubmit
      it('Passes a cb prop to the submit email event to ForgotPassword component', () => {
            props.forgotPassword.mockImplementation(({ email, onSuccess }) => onSuccess());
            wrapper.setState({ value: 'email@email.com' });
            wrapper.find(ForgotPassword).props().onSubmit({ preventDefault: jest.fn() });
            expect(props.forgotPassword.mock.calls.length).toEqual(1);
            expect(props.forgotPassword.mock.calls[0][0].email).toEqual('email@email.com');
            expect(wrapper.state().awaitingConfirmation).toEqual(true);
      });

      // Formik: hidden
      it('Does not display a Formik component if not waiting for the confirmation code', () => {
            expect(wrapper.find(Formik).length).toEqual(0);
      });

      // Formik
      describe('Formik Component', () => {

            beforeEach(() => {
                  wrapper.setState({ awaitingConfirmation: true });
            });

            it('Displays a Formik component if waiting for the confirmation code', () => {
                  expect(wrapper.find(Formik).length).toEqual(1);
            });

            // Formik prop: component
            it('Gets the ForgotPasswordSubmit component as prop', () => {
                  expect(wrapper.find(Formik).props().component).toEqual(ForgotPasswordSubmit);
            });

            // Formik prop: onSubmit
            it('Gets a cb prop to submit the form by merging form data with email kept in state', () => {
                  wrapper.setState({ value: 'email@email.com' });
                  wrapper.find(Formik).props().onSubmit({ confirmationCode: '9384', newPassword: 'somePwd'});
                  expect(props.dispatch.auth.resetPassword.mock.calls.length).toEqual(1);
                  expect(props.dispatch.auth.resetPassword.mock.calls[0][0]).toEqual({
                        email: 'email@email.com',
                        newPassword: 'somePwd',
                        confirmationCode: '9384'
                  });
            });

            //  prop: initialValues
            it('Gets initialValues to as prop', () => {
                  const { initialValues } = wrapper.instance();
                  expect(wrapper.find(Formik).props().initialValues).toEqual(initialValues);
            });

            // Formik prop: validationSchema
            it('Gets validationSchema as prop', () => {
                  expect(wrapper.find(Formik).props().validationSchema).toEqual(validationSchema);
            });
      });

});

