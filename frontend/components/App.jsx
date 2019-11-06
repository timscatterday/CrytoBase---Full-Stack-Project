import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import React from "react";
import { Provider } from 'react-redux';
import GreetingContainer from './greetings/greeting_container.js';
import SignupFormContainer from './sessions_form/signup_form_container';
import LoginFormContainer from './sessions_form/login_form_container';

const App = () => (
    <div>
        <header className='navBar'>
          <h1 className='title'>Cryptobase</h1>
          <GreetingContainer />
        </header>
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;