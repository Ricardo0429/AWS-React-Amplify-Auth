import React from 'react';
import { shallow } from 'enzyme';
import Component from './Alert';

describe( '(Component) Alert', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Alert', () => {
expect( wrapper.find( '.Alert' ).length ).toEqual( 1 );
});
});

