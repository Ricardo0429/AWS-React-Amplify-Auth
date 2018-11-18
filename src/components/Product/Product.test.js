import React from "react";
import { Button } from "react-bootstrap";
import { shallow } from "enzyme";
import { Form, Field } from "formik";
import Component from "./Product";
import CustomInputComponent from "../CustomInputComponent";

describe("(Component) Product", () => {
      let wrapper; let props;

      beforeEach(() => {
            props = {
                  dirty: true,
                  onDrop: jest.fn(),
                  filepath: "file/path/",
                  filename: "file-name.png",
                  editMode: true,
                  isSubmitting: false,
                  handleDelete: jest.fn(),
                  onDropRejected: jest.fn(),
                  onDropAccepted: jest.fn()
            };
            wrapper = shallow(<Component {...props} />);
      });

      it("Displays a Product", () => {
            expect(wrapper.find(".Product").length).toEqual(1);
      });

      // Form
      it("Displays a Form component", () => {
            expect(wrapper.find(Form).length).toEqual(1);
      });

      // Field
      it("Displays a Field component for the product name", () => {
            const field = wrapper
                  .find(Field)
                  .filterWhere(e => e.props().name === "name");
            expect(field.length).toEqual(1);
            expect(field.props().type).toEqual("text");
            expect(field.props().component).toEqual(CustomInputComponent);
      });

      // Field
      it("Displays a Field component for the product description", () => {
            const field = wrapper
                  .find(Field)
                  .filterWhere(e => e.props().name === "description");
            expect(field.length).toEqual(1);
            expect(field.props().type).toEqual("textarea");
            expect(field.props().component).toEqual(CustomInputComponent);
      });

      // "Save" Button
      it("Displays a Button component", () => {
            const button = wrapper
                  .find(Button)
                  .filterWhere(e => e.childAt(0).text() === "Save");
            expect(button.length).toEqual(1);
      });

      // Button prop: disabled
      it('Disables the "Save" Button component if form is untouched or submitting', () => {
            let button;
            button = wrapper
                  .find(Button)
                  .filterWhere(e => e.childAt(0).text() === "Save");
            expect(button.props().disabled).toEqual(false);
            wrapper.setProps({ dirty: false, isSubmitting: false });
            button = wrapper
                  .find(Button)
                  .filterWhere(e => e.childAt(0).text() === "Save");
            expect(button.props().disabled).toEqual(true);
            wrapper.setProps({ dirty: false, isSubmitting: true });
            button = wrapper
                  .find(Button)
                  .filterWhere(e => e.childAt(0).text() === "Save");
            expect(button.props().disabled).toEqual(true);
            wrapper.setProps({ dirty: true, isSubmitting: true });
            button = wrapper
                  .find(Button)
                  .filterWhere(e => e.childAt(0).text() === "Save");
            expect(button.props().disabled).toEqual(true);
      });

      // "Delete" Button
      it('Displays a "Delete" Button component', () => {
            const button = wrapper
                  .find(Button)
                  .filterWhere(e => e.childAt(0).text() === "Delete");
            expect(button.length).toEqual(1);
      });

      // "Delete" Button prop: onClick
      it('Passes a cb prop to handle delete product to "Delete" Button component', () => {
            const button = wrapper
                  .find(Button)
                  .filterWhere(e => e.childAt(0).text() === "Delete");
            button.props().onClick();
            expect(props.handleDelete.mock.calls.length).toEqual(1);
      });

      // "Delete" Button prop: disabled
      it('Disables the "Delete" Button component if form submitting', () => {
            let button;
            button = wrapper
                  .find(Button)
                  .filterWhere(e => e.childAt(0).text() === "Delete");
            expect(button.props().disabled).toEqual(false);
            wrapper.setProps({ isSubmitting: true });
            button = wrapper
                  .find(Button)
                  .filterWhere(e => e.childAt(0).text() === "Delete");
            expect(button.props().disabled).toEqual(true);
      });
});
