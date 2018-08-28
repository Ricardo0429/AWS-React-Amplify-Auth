import React from 'react';
import { shallow } from 'enzyme';
import Component from './Signup';

describe( '(Component) Signup', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Signup', () => {
expect( wrapper.find( '.Signup' ).length ).toEqual( 1 );
});
});

