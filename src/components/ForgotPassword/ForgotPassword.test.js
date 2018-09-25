import React from 'react';
import { shallow } from 'enzyme';
import Component from './ForgotPassword';

describe( '(Component) ForgotPassword', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a ForgotPassword', () => {
expect( wrapper.find( '.ForgotPassword' ).length ).toEqual( 1 );
});
});

