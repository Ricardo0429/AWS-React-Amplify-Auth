import React from 'react';
import {connect} from 'react-redux';
import Component from './RequireNotAuth';

export default connect(({ authenticated }) => ({ authenticated }))(Component);