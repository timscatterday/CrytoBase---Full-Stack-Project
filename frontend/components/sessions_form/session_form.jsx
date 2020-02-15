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
        this.login = this.login.bind(this);
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
            this.props.history.push(`/portfolio`)
        }) 
    };

    login(e){
        e.preventDefault();
        const user = {
            email: 'timscatterday@gmail.com',
            password: 'password'
        }
        this.setState(user)
        this.props.processForm(user).then(() => {
            this.props.history.push('portfolio')
        })
    }

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
                    <label className='email-pass'><br/>
                        <input type="text"
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                    </label>
                    <br/>
                    <label className='email-pass'><br/>
                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                    </label>
                    <br/>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    <input className='guest-login' type='submit' value='Demo Login' onClick={this.login}/>
                    {this.renderErrors()}
                </div>
              </form>
            </div> 
        );
    }
};

export default SessionForm;