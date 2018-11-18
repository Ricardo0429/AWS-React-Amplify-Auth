import React from "react";
import { Button } from "react-bootstrap";
import { shallow } from "enzyme";
import { Form, Field } from "formik";
import Component from "./ForgotPasswordSubmit";
import CustomInputComponent from "../CustomInputComponent";

describe("(Component) ForgotPasswordSubmit", () => {
      let wrapper; let props;

      beforeEach(() => {
            props = { dirty: true, isSubmitting: false };
            wrapper = shallow(<Component {...props} />);
      });

      it("Displays a ForgotPasswordSubmit", () => {
            expect(wrapper.find(".ForgotPasswordSubmit").length).toEqual(1);
      });

      it("Displays a Form component", () => {
            expect(wrapper.find(Form).length).toEqual(1);
      });

      // Field: confirmation code
      it("Displays a Field component for the confirmation code", () => {
            expect(
                  wrapper
                        .find(Field)
                        .at(0)
                        .props().name
            ).toEqual("confirmationCode");
            expect(
                  wrapper
                        .find(Field)
                        .at(0)
                        .props().component
            ).toEqual(CustomInputComponent);
      });

      // Field: new password
      it("Displays a Field component for the new password", () => {
            expect(
                  wrapper
                        .find(Field)
                        .at(1)
                        .props().name
            ).toEqual("newPassword");
            expect(
                  wrapper
                        .find(Field)
                        .at(1)
                        .props().component
            ).toEqual(CustomInputComponent);
      });

      // Field: confirm new password
      it("Displays a Field component for the new password confirmation", () => {
            expect(
                  wrapper
                        .find(Field)
                        .at(2)
                        .props().name
            ).toEqual("confirmNewPassword");
      });

      // Button
      it("Displays a Button component", () => {
            expect(wrapper.find(Button).length).toEqual(1);
      });

      // Button prop: disabled
      it("Disables the Button component if form is untouched or submitting", () => {
            expect(wrapper.find(Button).props().disabled).toEqual(false);
            wrapper.setProps({ dirty: false, isSubmitting: false });
            expect(wrapper.find(Button).props().disabled).toEqual(true);
            wrapper.setProps({ dirty: false, isSubmitting: true });
            expect(wrapper.find(Button).props().disabled).toEqual(true);
            wrapper.setProps({ dirty: true, isSubmitting: true });
            expect(wrapper.find(Button).props().disabled).toEqual(true);
      });
});
