import SessionForm from './session_form.jsx'
import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);