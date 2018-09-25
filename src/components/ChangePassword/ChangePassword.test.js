import React from 'react';
import { shallow } from 'enzyme';
import Component from './ChangePassword';

describe( '(Component) ChangePassword', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a ChangePassword', () => {
expect( wrapper.find( '.ChangePassword' ).length ).toEqual( 1 );
});
});

