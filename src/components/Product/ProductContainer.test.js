import React from 'react';
import Container from './ProductContainer';
import { shallow } from 'enzyme';
import Component from '../Product';
import { ProductContainer } from './ProductContainer';

describe( '(Container) Product', () => {
let wrapper, props;

beforeEach(() => {
props = { match: { params: { id: 23 }}};
wrapper = shallow( <ProductContainer { ...props } />);
});

test( 'Displays a Product component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

