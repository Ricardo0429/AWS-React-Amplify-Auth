import React from "react";
import { Formik } from "formik";
import { shallow } from "enzyme";
import validationSchema from "./validationSchema";
import { ProductContainer } from "./ProductContainer";
import { allowedFileTypes, maxFileSize } from "../../config";
import {
      fIleTypeError,
      fileTooLarge,
      unexpectedError
} from "../../config/messages";

describe("(Container) Product", () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = {
                  products: { selected: { id: 23 } },
                  match: { params: { id: "23" } },
                  dispatch: {
                        alert: {
                              error: jest.fn(),
                              silence: jest.fn()
                        },
                        products: {
                              create: jest.fn(),
                              update: jest.fn(),
                              getOne: jest.fn(),
                              remove: jest.fn()
                        }
                  }
            };
            wrapper = shallow(<ProductContainer {...props} />);
      });

      it("Gets the product into the state if id found", () => {
            expect(props.dispatch.products.getOne.mock.calls).toHaveLength(1);
            expect(props.dispatch.products.getOne.mock.calls[0][0]).toEqual(
                  "23"
            );
      });

      it("Does not try to get the product if no id found", () => {
            const props2 = {
                  ...props,
                  match: { params: { id: undefined } },
                  dispatch: { products: { getOne: jest.fn() } }
            };
            wrapper = shallow(<ProductContainer {...props2} />);
            expect(props2.dispatch.products.getOne.mock.calls).toHaveLength(0);
      });

      it("Displays a Formik component", () => {
            expect(wrapper.find(Formik)).toHaveLength(1);
      });

      // Formik prop: onSubmit
      it("Passes a cb prop to update the product to Formik component", () => {
            const { update } = props.dispatch.products;
            wrapper.setState({ existingFile: "existing-file.png" });
            wrapper
                  .find(Formik)
                  .props()
                  .onSubmit("arg");
            expect(update.mock.calls).toHaveLength(1);
            expect(update.mock.calls[0][0].id).toEqual("23");
            expect(update.mock.calls[0][0].body).toEqual("arg");
            expect(update.mock.calls[0][0].existingFile).toEqual(
                  "existing-file.png"
            );
      });

      // Formik prop: onSubmit
      it("Passes a cb prop to create the product to Formik component", () => {
            const { create } = props.dispatch.products;
            // simulate no id in url
            wrapper.setProps({ match: { params: { id: null } } });
            wrapper
                  .find(Formik)
                  .props()
                  .onSubmit("arg");
            expect(create.mock.calls).toHaveLength(1);
            expect(create.mock.calls[0][0]).toEqual("arg");
      });

      // Formik prop: initialValues
      it("Passes initialValues to Formik component", () => {
            const { initialValues } = wrapper.instance();
            expect(wrapper.find(Formik).props().initialValues).toEqual(
                  initialValues
            );
      });

      //  Formik prop: validationSchema
      it("Passes validationSchema to Formik component", () => {
            expect(wrapper.find(Formik).props().validationSchema).toEqual(
                  validationSchema
            );
      });

      // Product prop: filepath
      it("Passes filepath as prop to Product component", () => {
            wrapper.setState({ filepath: "some-file.png" });
            const Form = wrapper
                  .instance()
                  .renderForm({ setFieldValue: "some method" });
            expect(Form.props.filepath).toEqual("some-file.png");
      });

      // Product prop: onDrop
      it("Passes a cb prop to silence alert to Product component", () => {
            const Form = wrapper
                  .instance()
                  .renderForm({ setFieldValue: "some method" });
            Form.props.onDrop();
            expect(props.dispatch.alert.silence.mock.calls).toHaveLength(1);
      });

      // Product prop: filename
      it("Passes filename as prop to Product component", () => {
            wrapper.setState({ filename: "some-file.png" });
            const Form = wrapper
                  .instance()
                  .renderForm({ setFieldValue: "some method" });
            expect(Form.props.filename).toEqual("some-file.png");
      });

      // Product prop: editMode
      it("Passes editMode as prop to Product component", () => {
            let Form = wrapper
                  .instance()
                  .renderForm({ setFieldValue: "some method" });
            expect(Form.props.editMode).toEqual(true);
            wrapper.setProps({ match: { params: { id: null } } });
            Form = wrapper
                  .instance()
                  .renderForm({ setFieldValue: "some method" });
            expect(Form.props.editMode).toEqual(false);
      });

      // Product prop: handleDelete
      it("Passes a cb prop to delete the product to Product component", () => {
            wrapper.setState({ filename: "some-file.png" });
            const Form = wrapper
                  .instance()
                  .renderForm({ setFieldValue: "some method" });
            Form.props.handleDelete();
            expect(props.dispatch.products.remove.mock.calls).toHaveLength(1);
            expect(props.dispatch.products.remove.mock.calls[0][0].id).toEqual(
                  "23"
            );
            expect(
                  props.dispatch.products.remove.mock.calls[0][0].filename
            ).toEqual("some-file.png");
      });

      // Product prop: onDropRejected
      describe("Passes a cb prop to handle rejected files to Product component", () => {
            it("Displays an alert with a message indicating an unexpected error when cause not known", () => {
                  const Form = wrapper
                        .instance()
                        .renderForm({ setFieldValue: "some method" });
                  Form.props.onDropRejected([
                        { size: maxFileSize - 1, type: allowedFileTypes[0] }
                  ]);
                  expect(props.dispatch.alert.error.mock.calls).toHaveLength(1);
                  expect(props.dispatch.alert.error.mock.calls[0][0]).toEqual(
                        unexpectedError
                  );
            });

            it("Displays an alert with a message indicating the file size is too large", () => {
                  const Form = wrapper
                        .instance()
                        .renderForm({ setFieldValue: "some method" });
                  Form.props.onDropRejected([
                        { size: maxFileSize + 1, type: allowedFileTypes[0] }
                  ]);
                  expect(props.dispatch.alert.error.mock.calls).toHaveLength(1);
                  expect(props.dispatch.alert.error.mock.calls[0][0]).toEqual(
                        fileTooLarge(maxFileSize)
                  );
            });

            it("Displays an alert with a message indicating the file type is not allowed", () => {
                  const Form = wrapper
                        .instance()
                        .renderForm({ setFieldValue: "some method" });
                  Form.props.onDropRejected([
                        { size: maxFileSize - 1, type: "image/notAllowed" }
                  ]);
                  expect(props.dispatch.alert.error.mock.calls).toHaveLength(1);
                  expect(props.dispatch.alert.error.mock.calls[0][0]).toEqual(
                        fIleTypeError(allowedFileTypes.join(", "))
                  );
            });
      });

      it("Passes a cb prop to handle accepted files to Product component", () => {
            const setFieldValue = jest.fn();
            wrapper.setState({ filename: "existing-file.png" });
            const Form = wrapper.instance().renderForm({ setFieldValue });
            Form.props.onDropAccepted([
                  { preview: "file-preview", name: "file-name" }
            ]);
            const state = wrapper.state();
            expect(state.filepath).toEqual("file-preview");
            expect(state.filename).toEqual("file-name");
            expect(state.existingFile).toEqual("existing-file.png");
            expect(setFieldValue.mock.calls).toHaveLength(1);
            expect(setFieldValue.mock.calls[0][0]).toEqual("file");
            expect(setFieldValue.mock.calls[0][1]).toEqual({
                  preview: "file-preview",
                  name: "file-name"
            });
      });
});
