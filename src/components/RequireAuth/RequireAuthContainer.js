import React from 'react';
import {connect} from 'react-redux';
import Component from './RequireAuth';

export default connect(({ authenticated }) => ({ authenticated }))(Component);