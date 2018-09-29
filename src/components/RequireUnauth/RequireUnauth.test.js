import React from 'react';
import { shallow } from 'enzyme';
import Component from './RequireUnauth';

describe( '(Component) RequireUnauth', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a RequireUnauth', () => {
expect( wrapper.find( '.RequireUnauth' ).length ).toEqual( 1 );
});
});

