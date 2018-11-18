import React from "react";
import { shallow } from "enzyme";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import Products from "./Products";

describe("(Component) Products", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = {
                  list: [
                        { noteId: 5, name: "Product1", createdAt: "date1" },
                        { noteId: 6, name: "Product2", createdAt: "date2" }
                  ]
            };
            wrapper = shallow(<Products {...props} />);
      });

      it("Displays a Products component", () => {
            expect(wrapper.find(".Products")).toHaveLength(1);
      });

      // List not displayed
      it("Does not display a list of products ", () => {
            wrapper.setProps({ list: undefined });
            expect(wrapper.find(ListGroupItem).length).toEqual(0);
      });

      // List displayed
      it("Displays a list of products component", () => {
            expect(wrapper.find(ListGroupItem)).toHaveLength(2);
      });

      // ListGroupItem prop: header
      it("Passes header to ListGroupItem component", () => {
            expect(
                  wrapper
                        .find(ListGroupItem)
                        .at(0)
                        .props().header
            ).toEqual("Product1");
      });

      // Link
      it("Displays a Link component pointing to product detail page", () => {
            expect(wrapper.find(Link)).toHaveLength(2);
            expect(
                  wrapper
                        .find(Link)
                        .at(0)
                        .props().to
            ).toEqual(`${routes.product}5`);
      });
});
