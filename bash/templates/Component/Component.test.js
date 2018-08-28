import React from 'react';
import { shallow } from 'enzyme';
import Component from './[ComponentName]';

describe( '(Component) [ComponentName]', () => {
      let wrapper, props;

      beforeEach(() => {
            props = {};
            wrapper = shallow( <Component { ...props } />);
      });

      test( 'Displays a [ComponentName]', () => {
            expect( wrapper.find( '.[ComponentName]' ).length ).toEqual( 1 );
      });
});

