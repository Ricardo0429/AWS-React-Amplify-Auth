import React from 'react';
import { shallow } from 'enzyme';
import Component from './SignUp';

describe( '(Component) SignUp', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a SignUp', () => {
expect( wrapper.find( '.SignUp' ).length ).toEqual( 1 );
});
});

