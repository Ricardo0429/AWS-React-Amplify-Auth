import React from "react";
import { shallow } from "enzyme";
import Dropzone from "react-dropzone";
import Component from "./ProductAttachmentField";
import { allowedFileTypes, maxFileSize } from "../../config";

describe("(Component) Product", () => {
      let wrapper; let props;

      beforeEach(() => {
            props = {
                  onDrop: jest.fn(),
                  filepath: "file/path/",
                  filename: "file-name.png",
                  onDropRejected: jest.fn(),
                  onDropAccepted: jest.fn()
            };
            wrapper = shallow(<Component {...props} />);
      });

      // Dropzone
      it("Displays a Dropzone component", () => {
            expect(wrapper.find(Dropzone).length).toEqual(1);
      });

      // Dropzone prop: accept
      it("Passes accept to Dropzone component", () => {
            expect(wrapper.find(Dropzone).props().accept).toEqual(
                  allowedFileTypes.join(",")
            );
      });

      // Dropzone prop: onDrop
      it("Passes a cb prop to handle the onDrop event to Dropzone component", () => {
            wrapper
                  .find(Dropzone)
                  .props()
                  .onDrop("arg");
            expect(props.onDrop.mock.calls.length).toEqual(1);
            expect(props.onDrop.mock.calls[0][0]).toEqual("arg");
      });

      // Dropzone prop: maxSize
      it("Passes maxSize to Dropzone component", () => {
            expect(wrapper.find(Dropzone).props().maxSize).toEqual(maxFileSize);
      });

      // Dropzone prop: onDropRejected
      it("Passes a cb prop to handle the onDropERejected event  to Dropzone component", () => {
            wrapper
                  .find(Dropzone)
                  .props()
                  .onDropRejected("arg");
            expect(props.onDropRejected.mock.calls.length).toEqual(1);
            expect(props.onDropRejected.mock.calls[0][0]).toEqual("arg");
      });

      // Dropzone prop: onDropAccepted
      it("Passes a cb prop to handle the onDropAccepted event  to Dropzone component", () => {
            wrapper
                  .find(Dropzone)
                  .props()
                  .onDropAccepted("arg");
            expect(props.onDropAccepted.mock.calls.length).toEqual(1);
            expect(props.onDropAccepted.mock.calls[0][0]).toEqual("arg");
      });
});
