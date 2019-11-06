import SessionForm from './session_form.jsx'
import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);