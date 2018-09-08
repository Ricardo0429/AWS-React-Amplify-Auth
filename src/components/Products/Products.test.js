import React from 'react';
import { shallow } from 'enzyme';
import Component from './Products';

describe( '(Component) Products', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Products', () => {
expect( wrapper.find( '.Products' ).length ).toEqual( 1 );
});
});

