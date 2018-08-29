import React from 'react';
import { shallow } from 'enzyme';
import Component from './Dimmer';

describe( '(Component) Dimmer', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a Dimmer', () => {
expect( wrapper.find( '.Dimmer' ).length ).toEqual( 1 );
});
});

