import React from "react";
import { shallow } from "enzyme";
import { FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import CustomInputComponent from "./CustomInputComponent";

describe("(Component) CustomInputComponent", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = {
                  autoFocus: true,
                  type: "textarea",
                  field: { value: "value", name: "someName" },
                  form: {
                        errors: { someName: true },
                        touched: { someName: true },
                        handleChange: jest.fn()
                  },
                  children: <div className="child" />
            };
            wrapper = shallow(<CustomInputComponent {...props} />);
      });

      // FormGroup
      it("Displays a FormGroup with the field name as control id", () => {
            expect(wrapper.find(FormGroup).length).toEqual(1);
            expect(wrapper.find(FormGroup).props().controlId).toEqual(
                  "someName"
            );
      });

      // ControlLabel
      it("Displays a ControlLabel component to display the field name as label", () => {
            expect(wrapper.find(ControlLabel).length).toEqual(1);
            expect(
                  wrapper
                        .find(ControlLabel)
                        .childAt(0)
                        .text()
            ).toEqual("Some Name");
      });

      // FormControl
      it("Displays a FormControl component", () => {
            expect(wrapper.find(FormControl).length).toEqual(1);
      });

      // FormControl prop: value
      it("Passes value to FormControl component", () => {
            expect(wrapper.find(FormControl).props().value).toEqual("value");
      });

      // FormControl prop: onChange
      it("Passes a cb prop to handle user input to FormControl component", () => {
            wrapper
                  .find(FormControl)
                  .props()
                  .onChange();
            expect(props.form.handleChange.mock.calls).toHaveLength(1);
      });

      // FormControl prop: type
      it("Passes type to FormControl component", () => {
            expect(wrapper.find(FormControl).props().type).toEqual("textarea");
      });

      // FormControl prop: ...rest
      it("Passes the rest of the props to FormControl component", () => {
            expect(wrapper.find(FormControl).props().autoFocus).toEqual(true);
      });

      it("Displays a input error message component only if input has been touched and an error exists for this field", () => {
            expect(wrapper.find(".input-error").length).toEqual(1);
            wrapper.setProps({
                  form: {
                        touched: { someName: false },
                        errors: { someName: true }
                  }
            });
            expect(wrapper.find(".input-error").length).toEqual(0);
            wrapper.setProps({
                  form: {
                        touched: { someName: true },
                        errors: { someName: false }
                  }
            });
            expect(wrapper.find(".input-error").length).toEqual(0);
            wrapper.setProps({
                  form: {
                        touched: { someName: false },
                        errors: { someName: false }
                  }
            });
            expect(wrapper.find(".input-error").length).toEqual(0);
      });

      // props: children
      it("Displays the children passed", () => {
            expect(wrapper.find(".child").length).toEqual(1);
      });
});
