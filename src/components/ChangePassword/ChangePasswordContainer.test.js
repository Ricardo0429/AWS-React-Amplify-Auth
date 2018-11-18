import React from "react";
import { shallow } from "enzyme";
import ChangePassword from "./ChangePassword";
import { ChangePasswordContainer } from "./ChangePasswordContainer";

describe("(Container) ChangePassword", () => {
      let wrapper; let props;

      beforeEach(() => {
            props = {};
            wrapper = shallow(<ChangePasswordContainer {...props} />);
      });

      test("Displays a ChangePassword component", () => {
            expect(wrapper.find(ChangePassword)).toHaveLength(1);
      });
});
