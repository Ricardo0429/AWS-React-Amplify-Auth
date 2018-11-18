import React from "react";
import { shallow } from "enzyme";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ForgotPassword from "./ForgotPassword";

describe("(Component) ForgotPassword", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = {
                  value: "value",
                  onSubmit: jest.fn(),
                  onChange: jest.fn()
            };
            wrapper = shallow(<ForgotPassword {...props} />);
      });

      it("Displays a ForgotPassword", () => {
            expect(wrapper.find(".ForgotPassword")).toHaveLength(1);
      });

      // FormGroup
      it("Displays a FormGroup component", () => {
            expect(wrapper.find(FormGroup)).toHaveLength(1);
      });

      // ControlLabel
      it("Displays a ControlLabel component", () => {
            expect(wrapper.find(ControlLabel)).toHaveLength(1);
      });

      // FormControl
      it("Displays a FormControl component", () => {
            expect(wrapper.find(FormControl)).toHaveLength(1);
      });

      // prop: value
      it("Passes user input value to FormControl component", () => {
            expect(wrapper.find(FormControl).props().value).toEqual("value");
      });

      // FormControl prop: onChange
      it("Passes a cb prop to set the input value to FormControl component", () => {
            wrapper
                  .find(FormControl)
                  .props()
                  .onChange("arg");
            expect(props.onChange.mock.calls).toHaveLength(1);
            expect(props.onChange.mock.calls[0][0]).toEqual("arg");
      });

      // Button
      it("Displays a Button component", () => {
            expect(wrapper.find(Button)).toHaveLength(1);
      });

      // Button prop: onClick
      it("Passes a cb prop to submit the form to Button component", () => {
            wrapper
                  .find(Button)
                  .props()
                  .onClick();
            expect(props.onSubmit.mock.calls).toHaveLength(1);
      });

      it("Button displays a text to inform the userto reset password", () => {
            expect(
                  wrapper
                        .find(Button)
                        .childAt(0)
                        .text()
            ).toContain("Reset");
      });
});
