import React from 'react';
import {shallow} from 'enzyme';
import Container from '../ForgotPasswordContainer';
import Component from '../ForgotPassword';
import {ForgotPasswordContainer} from '../ForgotPasswordContainer;'

describe( '(Container) ForgotPassword', () => {
let wrapper, props;

beforeEach(() => {
      props = {};
      wrapper = shallow( <ForgotPasswordContainer { ...props } />);
});

test( 'Displays a ForgotPassword component', () => {
      expect( wrapper.find(Component).length ).toEqual( 1 );
      });
});

