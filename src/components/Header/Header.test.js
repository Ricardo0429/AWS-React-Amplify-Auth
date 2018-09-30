import React from 'react';
import { shallow } from 'enzyme';
import Component from './Header';

describe( '(Component) Header', () => {
      let wrapper, props;

      beforeEach(() => {
            props = {};
            wrapper = shallow( <Component { ...props } />);
      });

      it( 'Displays a Header', () => {
            expect( wrapper.find( '.Header' ).length ).toEqual( 1 );
      });
});

