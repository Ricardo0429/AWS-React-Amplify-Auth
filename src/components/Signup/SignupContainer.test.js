import React from 'react';
import Container from '../SignupContainer';
import { shallow } from 'enzyme';
import Component from '../Signup';
import { Container } from '../SignupContainer;'

describe( '(Container) Signup', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <SignupContainer { ...props } />);
});

test( 'Displays a Signup component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

