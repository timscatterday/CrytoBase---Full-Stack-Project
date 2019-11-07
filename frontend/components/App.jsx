import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import React from "react";
import { Provider} from 'react-redux';
import GreetingContainer from './greetings/greeting_container.js';
import SignupFormContainer from './sessions_form/signup_form_container';
import LoginFormContainer from './sessions_form/login_form_container';
import { AuthRoute} from '../util/route_util';
import HomeContainer from './home/home_container';

const App = () => (
    <div>
        <header className='navBar'>
            <Link className='title' to='/'>Cryptobase</Link>
          <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path='/' component={HomeContainer}/>
        </Switch>
    </div>
);

export default App;