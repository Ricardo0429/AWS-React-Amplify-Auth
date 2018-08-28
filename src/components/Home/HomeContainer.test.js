import React from 'react';
import Container from '../HomeContainer';
import { shallow } from 'enzyme';
import Component from '../Home';
import { Container } from '../HomeContainer;'

describe( '(Container) Home', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <HomeContainer { ...props } />);
});

test( 'Displays a Home component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

