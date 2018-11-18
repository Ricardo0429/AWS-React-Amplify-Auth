import React from "react";
import { shallow } from "enzyme";
import { Route, Redirect } from "react-router-dom";
import Component from "./RequireUnauth";
import routes from "../../config/routes";
import Login from "../Login";
import SignUp from "../SignUp";
import ForgotPassword from "../ForgotPassword";

describe("(Component) RequireAuth", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = { loggedIn: false };
            wrapper = shallow(<Component {...props} />);
      });

      it("Redirects to home page if user logged in", () => {
            wrapper.setProps({ loggedIn: true });
            expect(wrapper.find(Redirect)).toHaveLength(1);
            expect(wrapper.find(Redirect).props().to).toEqual(routes.home);
      });

      // Route: Login page
      it("Displays a Route component pointing to the Login page", () => {
            const route = wrapper
                  .find(Route)
                  .filterWhere(e => e.props().path === routes.login);
            expect(route).toHaveLength(1);
            expect(route.props().component).toEqual(Login);
      });

      // Route: SignUp page
      it("Displays a Route component pointing to the Signup page", () => {
            const route = wrapper
                  .find(Route)
                  .filterWhere(e => e.props().path === routes.signup);
            expect(route).toHaveLength(1);
            expect(route.props().component).toEqual(SignUp);
      });

      // Route: ForgotPassword page
      it("Displays a Route component pointing to the ForgotPassword page", () => {
            const route = wrapper
                  .find(Route)
                  .filterWhere(e => e.props().path === routes.forgotPassword);
            expect(route).toHaveLength(1);
            expect(route.props().component).toEqual(ForgotPassword);
      });
});
