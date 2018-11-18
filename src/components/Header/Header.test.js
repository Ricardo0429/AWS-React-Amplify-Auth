import { Link } from "react-router-dom";
import { shallow } from "enzyme";
import { LinkContainer } from "react-router-bootstrap";
import React, { Fragment } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Header from "./Header";
import routes from "../../config/routes";

describe("(Component) Header", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = { loggedIn: false, logout: jest.fn() };
            wrapper = shallow(<Header {...props} />);
      });

      it("Displays a Header", () => {
            expect(wrapper.find(".Header")).toHaveLength(1);
      });

      // Navbar
      it("Displays a Navbar component", () => {
            expect(wrapper.find(Navbar)).toHaveLength(1);
      });

      // Navbar.Brand
      it("Displays a Navbar.Brand component with a Link to the homepage", () => {
            expect(wrapper.find(Navbar.Brand)).toHaveLength(1);
            expect(wrapper.find(Navbar.Brand).find(Link)).toHaveLength(1);
            expect(
                  wrapper
                        .find(Navbar.Brand)
                        .find(Link)
                        .props().to
            ).toEqual(routes.home);
      });

      describe("When user is not logged in", () => {
            let link;

            beforeEach(() => {
                  wrapper.setProps({ loggedIn: false });
                  link = wrapper.find(LinkContainer);
            });

            // LinkContainer to signing up page
            it("Displays a LinkContainer component pointing to the sign up page", () => {
                  expect(
                        link.filterWhere(e => e.props().to === routes.signup)
                  ).toHaveLength(1);
            });

            // LinkContainer to login page
            it("Displays a LinkContainer component pointing to the login page", () => {
                  expect(
                        link.filterWhere(e => e.props().to === routes.login)
                  ).toHaveLength(1);
            });

            // LinkContainer to products page not displayed
            it("Does not display a LinkContainer component pointing to the products page", () => {
                  expect(
                        link.filterWhere(e => e.props().to === routes.products)
                  ).toHaveLength(0);
            });

            // LinkContainer to product page not displayed
            it("Does not display a LinkContainer component pointing to the product page", () => {
                  expect(
                        link.filterWhere(e => e.props().to === routes.product)
                  ).toHaveLength(0);
            });

            // No logout button
            it("Does not display a NavItem component to log the user out", () => {
                  const btn = wrapper
                        .find(NavItem)
                        .filterWhere(e => e.childAt(0).text() === "Logout");
                  expect(btn).toHaveLength(0);
            });
      });

      describe("When user is logged in", () => {
            let link;

            beforeEach(() => {
                  wrapper.setProps({ loggedIn: true });
                  link = wrapper.find(LinkContainer);
            });

            // LinkContainer to products page
            it("Displays a LinkContainer component pointing to the products page", () => {
                  expect(
                        link.filterWhere(e => e.props().to === routes.products)
                  ).toHaveLength(1);
            });

            // LinkContainer to product page
            it("Displays a LinkContainer component pointing to the product page", () => {
                  expect(
                        link.filterWhere(e => e.props().to === routes.product)
                  ).toHaveLength(1);
            });

            // NavItem prop: onClick
            it("Displays a NavItem component to log the user out", () => {
                  wrapper
                        .find(NavItem)
                        .filterWhere(e => e.childAt(0).text() === "Logout")
                        .props()
                        .onClick();
                  expect(props.logout.mock.calls).toHaveLength(1);
            });

            // LinkContainer to signing up page not displayed
            it("Does not display a LinkContainer component pointing to the sign up page", () => {
                  expect(
                        link.filterWhere(e => e.props().to === routes.signup)
                  ).toHaveLength(0);
            });

            // LinkContainer to login page not displayed
            it("Does not display a LinkContainer component pointing to the login page", () => {
                  expect(
                        link.filterWhere(e => e.props().to === routes.login)
                  ).toHaveLength(0);
            });
      });
});
