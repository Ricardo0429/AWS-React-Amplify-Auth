import React from 'react';
import Container from '../SignUpContainer';
import { shallow } from 'enzyme';
import Component from '../SignUp';
import { Container } from '../SignUpContainer;'

describe( '(Container) SignUp', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <SignUpContainer { ...props } />);
});

test( 'Displays a SignUp component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

