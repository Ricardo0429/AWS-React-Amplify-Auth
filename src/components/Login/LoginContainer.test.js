import React from "react";
import { shallow } from "enzyme";
import { Formik } from "formik";
import Login from "./Login";
import { LoginContainer } from "./LoginContainer";

describe("(Container) Login", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = { login: jest.fn() };
            wrapper = shallow(<LoginContainer {...props} />);
      });

      it("Displays a Login component", () => {
            expect(wrapper.find(Formik).length).toEqual(1);
      });

      // Formik prop: onSubmit
      it("Passes a cb prop to submit the form to Formik component", () => {
            wrapper
                  .find(Formik)
                  .props()
                  .onSubmit({ email: "some@email.com", password: "pwd" });
            const { calls } = props.login.mock;
            expect(calls).toHaveLength(1);
            expect(calls[0][0].email).toEqual("some@email.com");
            expect(calls[0][0].password).toEqual("pwd");
      });

      // Formik prop: component
      it("Passes formIsValid to Logon component", () => {
            expect(wrapper.find(Formik).props().component).toEqual(Login);
      });

      // Formik prop: initialValues
      it("Passes initialValues to Formik component", () => {
            expect(wrapper.find(Formik).props().initialValues).toEqual({
                  email: "",
                  password: ""
            });
      });
});
