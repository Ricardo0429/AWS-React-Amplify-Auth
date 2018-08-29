import React from 'react';
import { shallow } from 'enzyme';
import Component from './RequireNotAuth';

describe( '(Component) RequireNotAuth', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a RequireNotAuth', () => {
expect( wrapper.find( '.RequireNotAuth' ).length ).toEqual( 1 );
});
});

