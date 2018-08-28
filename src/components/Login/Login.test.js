import React from 'react';
import { shallow } from 'enzyme';
import Component from './Login';

describe( '(Component) Login', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Login', () => {
expect( wrapper.find( '.Login' ).length ).toEqual( 1 );
});
});

