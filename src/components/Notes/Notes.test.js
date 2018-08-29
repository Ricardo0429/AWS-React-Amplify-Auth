import React from 'react';
import { shallow } from 'enzyme';
import Component from './Notes';

describe( '(Component) Notes', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Notes', () => {
expect( wrapper.find( '.Notes' ).length ).toEqual( 1 );
});
});

