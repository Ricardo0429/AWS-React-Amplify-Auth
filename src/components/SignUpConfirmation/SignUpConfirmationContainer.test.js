import React from 'react';
import Container from '../SignUpConfirmationContainer';
import { shallow } from 'enzyme';
import Component from '../SignUpConfirmation';
import { Container } from '../SignUpConfirmationContainer;'

describe( '(Container) SignUpConfirmation', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <SignUpConfirmationContainer { ...props } />);
});

test( 'Displays a SignUpConfirmation component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

