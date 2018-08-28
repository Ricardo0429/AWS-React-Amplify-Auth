import React from 'react';
import Container from '../[ComponentName]Container';
import { shallow } from 'enzyme';
import Component from '../[ComponentName]';
import { Container } from '../[ComponentName]Container;'

describe( '(Container) [ComponentName]', () => {
      let wrapper, props;

      beforeEach(() => {
            props = {};
            wrapper = shallow( <[ComponentName]Container { ...props } />);
      });

      test( 'Displays a [ComponentName] component', () => {
            expect( wrapper.find( Component ).length ).toEqual( 1 );
      });
});

