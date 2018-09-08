import React from 'react';
import { shallow } from 'enzyme';
import Component from './Product';

describe( '(Component) Product', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Product', () => {
expect( wrapper.find( '.Product' ).length ).toEqual( 1 );
});
});

