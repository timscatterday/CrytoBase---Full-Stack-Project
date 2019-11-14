import React from 'react';
import { clearErrors } from '../../actions/session_actions';

class SessionForm extends React.Component {
    constructor(props){
        super(props)


        let email = localStorage.getItem('email') ? localStorage.getItem('email') : ""

        this.state = {
            email: email,
            password: ""
        };


        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        localStorage.clear()
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then((user) => {
            this.props.history.push(`/portfolio/${user.id}`)
        }) 
    };

    renderErrors() {
        return (
            <ul className='session_errors'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }


    render(){
        return(
            <div className='login-form-container'>
                <h1 class='formName'>{this.props.formType}</h1>
              <form onSubmit={this.handleSubmit} className='login-form-box'>
                <div className="login-form">
                    <br/>
                    <label><br/>
                        <input type="text"
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                    </label>
                    <br/>
                    <label><br/>
                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                    </label>
                    <br/>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    {this.renderErrors()}
                </div>
              </form>
            </div> 
        );
    }
};

export default SessionForm;