import React from 'react';
import Container from '../ChangePasswordContainer';
import { shallow } from 'enzyme';
import Component from '../ChangePassword';
import { Container } from '../ChangePasswordContainer;'

describe( '(Container) ChangePassword', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <ChangePasswordContainer { ...props } />);
});

test( 'Displays a ChangePassword component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

