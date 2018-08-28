import React from 'react';
import Container from '../LoginContainer';
import { shallow } from 'enzyme';
import Component from '../Login';
import { Container } from '../LoginContainer;'

describe( '(Container) Login', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <LoginContainer { ...props } />);
});

test( 'Displays a Login component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

