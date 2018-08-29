import React from 'react';
import { shallow } from 'enzyme';
import Component from './RequireAuth';

describe( '(Component) RequireAuth', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a RequireAuth', () => {
expect( wrapper.find( '.RequireAuth' ).length ).toEqual( 1 );
});
});

