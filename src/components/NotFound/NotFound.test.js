import React from 'react';
import { shallow } from 'enzyme';
import Component from './NotFound';

describe( '(Component) NotFound', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a NotFound', () => {
expect( wrapper.find( '.NotFound' ).length ).toEqual( 1 );
});
});

