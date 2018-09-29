import React from 'react';
import {shallow} from 'enzyme';
import CustomInputComponent from './CustomInputComponent';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

describe('(Component) CustomInputComponent', () => {
      let wrapper, props;

      beforeEach(() => {
            props = {
                  autoFocus: true,
                  type: 'textarea',
                  field: { value: 'value', name: 'someName' },
                  form: {
                        errors: { name: true },
                        touched: { name: true },
                        handleChange: jest.fn()
                  },
                  children: <div className="child"></div>
            };
            wrapper = shallow(<CustomInputComponent {...props} />);
      });

      // FormGroup
      it( 'Displays a FormGroup with the field name as control id', () => {
            expect(wrapper.find(FormGroup).length).toEqual(1);
            expect(wrapper.find(FormGroup).props().controlId).toEqual('Some Name');
      });

      // ControlLabel
      it('Displays a ControlLabel component to display the field name as label', () => {
            expect(wrapper.find(ControlLabel).length).toEqual(1);
            expect(wrapper.find(ControlLabel).childAt(0).text()).toEqual('Name');
      });

      // FormControl
      it('Displays a FormControl component', () => {
            expect(wrapper.find(FormControl).length).toEqual(1);
      });

      // FormControl prop: value
      it('Passes value to FormControl component', () => {
            expect(wrapper.find(FormControl).props().value).toEqual('value');
      });

      // FormControl prop: onChange
      it('Passes a cb prop to handle user input to FormControl component', () => {
            wrapper.find(FormControl).props().onChange();
            expect(props.form.handleChange.mock.calls.length).toEqual(1);
      });

      // FormControl prop: type
      it('Passes type to FormControl component', () => {
            expect(wrapper.find(FormControl).props().type).toEqual('textarea');
      });

      // FormControl prop: ...rest
      it('Passes the rest of the props to FormControl component', () => {
            expect(wrapper.find(FormControl).props().autoFocus).toEqual(true);
      });

      it('Displays a input error message component only if input has been touched and an error exists for this field', () => {
            expect(wrapper.find('.input-error').length).toEqual(1);
            wrapper.setProps({ form: { touched: { name: false }, errors: { name: true }}});
            expect(wrapper.find('.input-error').length).toEqual(0);
            wrapper.setProps({ form: { touched: { name: true }, errors: { name: false }}});
            expect(wrapper.find('.input-error').length).toEqual(0);
            wrapper.setProps({ form: { touched: { name: false }, errors: { name: false }}});
            expect(wrapper.find('.input-error').length).toEqual(0);
      });

      // props: children
      it('Displays the children passed', () => {
            expect(wrapper.find('.child').length).toEqual(1);
      });
});

