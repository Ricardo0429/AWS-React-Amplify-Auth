import React from 'react';
import { shallow } from 'enzyme';
import Component from './Home';

describe( '(Component) Home', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Home', () => {
expect( wrapper.find( '.Home' ).length ).toEqual( 1 );
});
});

