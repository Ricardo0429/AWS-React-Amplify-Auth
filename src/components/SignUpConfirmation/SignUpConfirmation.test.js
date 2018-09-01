import React from 'react';
import { shallow } from 'enzyme';
import Component from './SignUpConfirmation';

describe( '(Component) SignUpConfirmation', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <Component { ...props } />);
});

test( 'Displays a SignUpConfirmation', () => {
expect( wrapper.find( '.SignUpConfirmation' ).length ).toEqual( 1 );
});
});

