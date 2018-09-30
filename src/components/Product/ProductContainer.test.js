import React from 'react';
import Product from '../Product';
import { shallow } from 'enzyme';
import { ProductContainer } from './ProductContainer';

describe( '(Container) Product', () => {
      let wrapper, props;

      beforeEach(() => {
            props = { match: { params: { id: 23 }}};
            wrapper = shallow( <ProductContainer { ...props } />);
      });

      test( 'Displays a Product component', () => {
            expect( wrapper.find(Product).length ).toEqual( 1 );
      });
});

