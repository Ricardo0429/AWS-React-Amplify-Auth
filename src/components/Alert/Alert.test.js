import React from 'react';
import {shallow} from 'enzyme';
import Component from './Alert';
import {Alert, Glyphicon} from 'react-bootstrap';

describe('(Component) Alert', () => {
      let wrapper, props;

      beforeEach(() => {
            props = {
                  alert: {
                        type: 'success',
                        message: 'message1'
                  },
                  silence: jest.fn()
            };
            wrapper = shallow(<Component {...props} />);
      });

      it( 'Displays a Alert', () => {
            expect(wrapper.find('.Alert').length).toEqual(1);
      });

      // text + props: bsStyle
      it('Shows the alert if a message is passed', () => {
            expect(wrapper.find(Alert).props().bsStyle).toEqual('success');;
            expect(wrapper.find(Alert).childAt(0).text()).toEqual('message1');;
            wrapper.setProps({alert: { message: 'message2', type: 'info' }});
            expect(wrapper.find(Alert).props().bsStyle).toEqual('info');;
            expect(wrapper.find(Alert).childAt(0).text()).toEqual('message2');;
      });

      // Glyphicon
      it('Displays a Glyphicon component', () => {
            expect(wrapper.find(Glyphicon).length).toEqual(1);
            expect(wrapper.find(Glyphicon).props().glyph).toEqual('remove');
      });

      // Glyphicon prop: onClick
      it('Passes a cb prop to close the alert to the icon', () => {
            wrapper.find(Glyphicon).props().onClick();
            expect(props.silence.mock.calls.length).toEqual(1);
            expect(props.silence.mock.calls[0][0]).toEqual();
      });
});

