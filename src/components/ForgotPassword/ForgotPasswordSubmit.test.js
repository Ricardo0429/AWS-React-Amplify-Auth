import React from 'react';
import { shallow } from 'enzyme';
import Component from './ForgotPasswordSubmit';

describe( '(Component) ForgotPasswordSubmit', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a ForgotPasswordSubmit', () => {
expect( wrapper.find( '.ForgotPasswordSubmit' ).length ).toEqual( 1 );
});
});

