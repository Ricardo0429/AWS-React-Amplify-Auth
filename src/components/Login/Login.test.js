import React from 'react';
import { shallow } from 'enzyme';
import Component from './Login';

describe( '(Component) Login', () => {
      let wrapper, props;

      beforeEach(() => {
            props = {
                  email: 'example@email.com',
                  password: 'Passw0rd!',
                  formIsvalid: true,
                  handleSubmit: jest.fn(),
                  handleChange: jest.fn()
            };
            wrapper = shallow( <Component { ...props } />);
      });

      test( 'Displays a Login', () => {
            expect( wrapper.find( '.Login' ).length ).toEqual( 1 );
      });
});

