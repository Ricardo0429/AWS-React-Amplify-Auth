import React from 'react';
import Container from '../ForgotPasswordSubmitContainer';
import { shallow } from 'enzyme';
import Component from '../ForgotPasswordSubmit';
import { Container } from '../ForgotPasswordSubmitContainer;'

describe( '(Container) ForgotPasswordSubmit', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <ForgotPasswordSubmitContainer { ...props } />);
});

test( 'Displays a ForgotPasswordSubmit component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

