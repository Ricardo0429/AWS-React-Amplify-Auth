import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { AppContainer } from "./AppContainer";

describe("(Container) App", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = { isAuthenticated: jest.fn() };
            wrapper = shallow(<AppContainer {...props} />);
      });

      it("Displays a AppContainer component and calls the authentication service on mount", () => {
            expect(wrapper.find(App)).toHaveLength(1);
            expect(props.isAuthenticated.mock.calls).toHaveLength(1);
      });
});
