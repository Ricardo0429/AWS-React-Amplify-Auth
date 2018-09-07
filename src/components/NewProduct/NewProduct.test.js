import React from 'react';
import { shallow } from 'enzyme';
import Component from './NewProduct';

describe( '(Component) NewProduct', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a NewProduct', () => {
expect( wrapper.find( '.NewProduct' ).length ).toEqual( 1 );
});
});

