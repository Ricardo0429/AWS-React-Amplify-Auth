import App from './App';
import React from 'react';
import {shallow} from 'enzyme';
import {AppContainer} from './AppContainer';

describe('(Container) App', () => {
      let wrapper, props;

      beforeEach(() => {
            props = { isAuthenticated: jest.fn() };
            wrapper = shallow(<AppContainer {...props} />);
      });

      it('Displays a AppContainer component and calls the authentication service on mount', () => {
            expect(wrapper.find(App).length).toEqual(1);
            expect(props.isAuthenticated.mock.calls.length).toEqual(1);
      });
});