import React from 'react';
import { shallow } from 'enzyme';
import Component from './Loader';

describe( '(Component) Loader', () => {
      let wrapper, props;

      beforeEach(() => {
            props = {};
            wrapper = shallow( <Component { ...props } />);
      });

      it( 'Displays a Loader', () => {
            expect( wrapper.find( '.Loader' ).length ).toEqual( 1 );
      });
});

