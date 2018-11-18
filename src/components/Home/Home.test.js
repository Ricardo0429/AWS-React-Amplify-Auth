import React from "react";
import { shallow } from "enzyme";
import Component from "./Home";

describe("(Component) Home", () => {
      let wrapper;

      beforeEach(() => {
            wrapper = shallow(<Component />);
      });

      test("Displays a Home", () => {
            expect(wrapper.find(".Home").length).toEqual(1);
      });
});
