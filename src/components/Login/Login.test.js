import {Link} from 'react-router-dom';
import React from 'react';
import routes from '../../config/routes';
import {Button} from "react-bootstrap";
import {shallow} from 'enzyme';
import Component from './Login';
import {Form, Field} from 'formik';
import CustomInputComponent from '../CustomInputComponent';

describe( '(Component) Login', () => {
      let wrapper, props, fields;

      beforeEach(() => {
            props = { dirty: true, isSubmitting: false };
            wrapper = shallow( <Component { ...props } />);
            fields = wrapper.find(Field);
      });

      test( 'Displays a Login', () => {
            expect( wrapper.find( '.Login' ).length ).toEqual( 1 );
      });

      // Form
      it('Displays a Form component', () => {
            expect(wrapper.find(Form).length).toEqual(1);
      });

      // email field
      it('Displays a Field component for the user email', () => {
            const emailField = fields.filterWhere(e => e.props().name === 'email');
            expect(emailField.length).toEqual(1);
            expect(emailField.props().type).toEqual('email');
            expect(emailField.props().component).toEqual(CustomInputComponent);
      });

      // password field
      it('Displays a Field component for the user password', () => {
            const passwordField = fields.filterWhere(e => e.props().name === 'password');
            expect(passwordField.length).toEqual(1);
            expect(passwordField.props().type).toEqual('password');
            expect(passwordField.props().component).toEqual(CustomInputComponent);
      });

      // Button
      it('Displays a Button component to submit the form', () => {
            expect(wrapper.find(Button).length).toEqual(1);
      });

      // Button prop: disabled
      it('Disables the Button component if form is untouched or submitting', () => {
            expect(wrapper.find(Button).props().disabled).toEqual(false);
            wrapper.setProps({ dirty: false, isSubmitting: false });
            expect(wrapper.find(Button).props().disabled).toEqual(true);;
            wrapper.setProps({ dirty: false, isSubmitting: true });
            expect(wrapper.find(Button).props().disabled).toEqual(true);;
            wrapper.setProps({ dirty: true, isSubmitting: true });
            expect(wrapper.find(Button).props().disabled).toEqual(true);
      });

      // Link
      it('Displays a Link component pointing to forgot password page', () => {
            expect(wrapper.find(Link).length).toEqual(1);
            expect(wrapper.find(Link).props().to).toEqual(routes.forgotPassword);
            expect(wrapper.find(Link).childAt(0).text()).toEqual('Forgot password');
      });
});

