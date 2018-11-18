import React from "react";
import { Formik } from "formik";
import { shallow } from "enzyme";
import validationSchema from "./validationSchema";
import { SignUpContainer } from "./SignUpContainer";
import SignUpConfirmation from "./SignUpConfirmation";

describe("(Container) SignUp", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = {
                  signUp: jest.fn(),
                  confirmSignUp: jest.fn()
            };
            wrapper = shallow(<SignUpContainer {...props} />);
      });

      // SignUpConfirmation
      it("Displays a SignUpConfirmation component if awaiting confirmation", () => {
            wrapper.setState({ awaitingConfirmation: true });
            expect(wrapper.find(SignUpConfirmation)).toHaveLength(1);
      });

      // SignUpConfirmation prop: formIsValid
      it("Passes prop with validity of form to SignUpConfirmation component", () => {
            wrapper.setState({
                  awaitingConfirmation: true,
                  confirmationCode: ""
            });
            let { formIsValid } = wrapper.find(SignUpConfirmation).props();
            expect(formIsValid).toEqual(false);
            wrapper.setState({
                  awaitingConfirmation: true,
                  confirmationCode: "273498"
            });
            ({ formIsValid } = wrapper.find(SignUpConfirmation).props());
            expect(formIsValid).toEqual(true);
      });

      // SignUpConfirmation prop: handleSubmit
      it("Passes a cb prop to submit the confirmation code to SignUpConfirmation component", () => {
            wrapper.setState({
                  email: "some@email.com",
                  password: "password",
                  confirmationCode: "1234",
                  awaitingConfirmation: true
            });
            wrapper
                  .find(SignUpConfirmation)
                  .props()
                  .handleSubmit({ preventDefault: () => null });
            expect(props.confirmSignUp.mock.calls).toHaveLength(1);
            expect(props.confirmSignUp.mock.calls[0][0]).toEqual({
                  email: "some@email.com",
                  password: "password",
                  confirmationCode: "1234"
            });
      });

      // SignUpConfirmation prop: handleChange
      it("Passes a cb prop to handle user input to SignUpConfirmation component", () => {
            wrapper.setState({ awaitingConfirmation: true });
            wrapper
                  .find(SignUpConfirmation)
                  .props()
                  .handleChange({
                        target: { id: "email", value: "an@email.com" }
                  });
            expect(wrapper.state().email).toEqual("an@email.com");
      });

      //  prop: confirmationCode
      it("Passes confirmationCode to SignUpConfirmation component", () => {
            wrapper.setState({
                  confirmationCode: "1234",
                  awaitingConfirmation: true
            });
            expect(
                  wrapper.find(SignUpConfirmation).props().confirmationCode
            ).toEqual("1234");
      });

      it("Displays a Formik component if not already awaiting for confirmation", () => {
            expect(wrapper.find(Formik)).toHaveLength(1);
      });

      // Formik prop: onSubmit
      it("Passes a cb prop to submit the form to Formik component", () => {
            wrapper
                  .find(Formik)
                  .props()
                  .onSubmit({ email: "some@email.com", password: "pwd" });
            const { email, password } = props.signUp.mock.calls[0][0];
            expect(props.signUp.mock.calls).toHaveLength(1);
            expect(email).toEqual("some@email.com");
            expect(password).toEqual("pwd");
      });

      // Formik prop: initialValues
      it("Passes initialValues to Formik component", () => {
            expect(wrapper.find(Formik).props().initialValues).toEqual({
                  email: "",
                  password: "",
                  confirmPassword: ""
            });
      });

      // Formik prop: validationSchema
      it("Passes validationSchema to Formik component", () => {
            expect(wrapper.find(Formik).props().validationSchema).toEqual(
                  validationSchema
            );
      });
});
