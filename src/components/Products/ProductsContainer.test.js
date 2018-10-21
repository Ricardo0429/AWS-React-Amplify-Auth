import React from 'react';
import {shallow} from 'enzyme';
import Products from './Products';
import {ProductsContainer} from './ProductsContainer';

describe( '(Container) Products', () => {
      let wrapper, props;

      beforeEach(() => {
            props = {
                  products: {
                        all: ['product1', 'product2']
                  },
                  getAll: jest.fn()
            };
            wrapper = shallow( <ProductsContainer { ...props } />);
      });

      it('Gets all the products into the state', () => {
            expect(props.getAll.mock.calls.length).toEqual(1);
      });

      it( 'Displays a Products component', () => {
            expect( wrapper.find(Products).length).toEqual( 1 );
      });

      // Products prop: list
      it('Passes list to Products component', () => {
            expect(wrapper.find(Products).props().list).toEqual(['product1', 'product2']);
      });
});

