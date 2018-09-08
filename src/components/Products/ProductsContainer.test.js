import React from 'react';
import Container from '../ProductsContainer';
import { shallow } from 'enzyme';
import Component from '../Products';
import { Container } from '../ProductsContainer;'

describe( '(Container) Products', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <ProductsContainer { ...props } />);
});

test( 'Displays a Products component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

