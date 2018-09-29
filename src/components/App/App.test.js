import App from './App';
import Alert from '../Alert';
import React from 'react';
import Home from "../Home";
import Loader from '../Loader';
import Header from '../Header';
import {Route} from "react-router-dom";
import Dimmer from '../Dimmer';
import {shallow} from 'enzyme';
import NotFound from "../NotFound";
import RequireAuth from '../RequireAuth';
import RequireUnauth from '../RequireUnauth';

describe('(Component) App', () => {
      let wrapper, props;

      beforeEach(() => {
            props = { loading: false };
            wrapper = shallow(<App {...props}/>);
      });

      it( 'Displays a App component', () => {
            expect( wrapper.find( '.App' ).length ).toEqual(1);
      });

      // Dimmer ane Loader components not showing
      it('Does not display a Dimmer and Loader component if loading is off', () => {
            expect(wrapper.find(Loader).length).toEqual(0);
            expect(wrapper.find(Dimmer).length).toEqual(0);
      });


      // Dimmer ane Loader components
      it('Displays a Dimmer and Loader component if loading is on', () => {
            wrapper.setProps({ loading: true });
            expect(wrapper.find(Loader).length).toEqual(1);
            expect(wrapper.find(Dimmer).length).toEqual(1);
      });

      // Header
      it('Displays a Header component', () => {
            expect(wrapper.find(Header).length).toEqual(1);
      });

      // Alert
      it('Displays a Alert component', () => {
            expect(wrapper.find(Alert).length).toEqual(1);
      });

      // Route to Home
      it('Displays a Route component that points to the Home compoment', () => {
            const route = wrapper.find(Route).filterWhere(r => r.props().path === '/');
            expect(route.length).toEqual(1);
            expect(route.props().component).toEqual(Home);
      });

      // Route to RequireAuth
      it('Displays a Route component that points to the RequireAuth compoment', () => {
            const route = wrapper.find(Route).filterWhere(r => r.props().path === '/auth');
            expect(route.length).toEqual(1);
            expect(route.props().component).toEqual(RequireAuth);
      });

      // Route to RequireUnauth
      it('Displays a Route component that points to the RequireAuth compoment', () => {
            const route = wrapper.find(Route).filterWhere(r => r.props().path === '/unauth');
            expect(route.length).toEqual(1);
            expect(route.props().component).toEqual(RequireUnauth);
      });

      // Route to NotFound
      it('Displays a Route component that points to the NotFound compoment', () => {
            const route = wrapper.find(Route).filterWhere(r => r.props().component === NotFound);
            expect(route.length).toEqual(1);
            expect(route.props().path).toEqual(undefined);
      });
});