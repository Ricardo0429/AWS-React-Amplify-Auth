import React from 'react';
import Container from '../NotesContainer';
import { shallow } from 'enzyme';
import Component from '../Notes';
import { Container } from '../NotesContainer;'

describe( '(Container) Notes', () => {
let wrapper, props;

beforeEach(() => {
props = {};
wrapper = shallow( <NotesContainer { ...props } />);
});

test( 'Displays a Notes component', () => {
expect( wrapper.find( Component ).length ).toEqual( 1 );
});
});

