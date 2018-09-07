import React from 'react';
import Container from '../NewProductContainer';
import { shallow } from 'enzyme';
import Component from '../NewProduct';
import { Container } from '../NewProductContainer;'

describe( '(Container) NewProduct', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <NewProductContainer { ...props } />);
});

test( 'Displays a NewProduct component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

