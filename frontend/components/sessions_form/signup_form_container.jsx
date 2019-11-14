import SessionForm from './session_form.jsx'
import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return({
        errors: state.errors.session,
        formType: 'Sign Up',
    })
};

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);