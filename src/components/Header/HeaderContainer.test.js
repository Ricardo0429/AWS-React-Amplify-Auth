import React from 'react';
import Container from '../HeaderContainer';
import { shallow } from 'enzyme';
import Component from '../Header';
import { Container } from '../HeaderContainer;'

describe( '(Container) Header', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <HeaderContainer { ...props } />);
});

test( 'Displays a Header component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

