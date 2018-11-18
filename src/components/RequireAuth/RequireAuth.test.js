import React from "react";
import { shallow } from "enzyme";
import { Route, Redirect } from "react-router-dom";
import Component from "./RequireAuth";
import Product from "../Product";
import Products from "../Products";
import routes from "../../config/routes";

describe("(Component) RequireAuth", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = {
                  match: { path: "/some/path" },
                  loggedIn: true
            };
            wrapper = shallow(<Component {...props} />);
      });

      it("Redirects to login page if not yet logged in", () => {
            wrapper.setProps({ loggedIn: false });
            expect(wrapper.find(Redirect)).toHaveLength(1);
            expect(wrapper.find(Redirect).props().to).toEqual(routes.login);
      });

      // Route: Product page
      it("Displays a Route component pointing to the Product page with id", () => {
            const route = wrapper
                  .find(Route)
                  .filterWhere(
                        e => e.props().path === "/some/path/product/:id"
                  );
            expect(route).toHaveLength(1);
            expect(route.props().component).toEqual(Product);
      });

      // Route: Product page
      it("Displays a Route component pointing to the Product page", () => {
            const route = wrapper
                  .find(Route)
                  .filterWhere(e => e.props().path === "/some/path/product");
            expect(route).toHaveLength(1);
            expect(route.props().component).toEqual(Product);
      });

      // Route: Products page
      it("Displays a Route component pointing to the Products page", () => {
            const route = wrapper
                  .find(Route)
                  .filterWhere(e => e.props().path === "/some/path/products");
            expect(route).toHaveLength(1);
            expect(route.props().component).toEqual(Products);
      });
});
