import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionRoutes = () => (
        <nav className="login_signup">
            <Link class='login_button'to="/login">Login</Link>
            <Link class='signup_button'to="/signup">Get Started</Link>
        </nav>
    );
 
    const LoggedIn = () => (
    <div>
        <div className='portfolio_link' >
            <Link className='portfolio_button' to={`/portfolio`}>Portfolio</Link>
        </div>
        <hgroup class="header">
            <h2 class='header-email'>{currentUser.email}</h2>
            <button className='logout_button' onClick={logout}>Logout</button>
        </hgroup>
    </div>
    );

    return currentUser ? LoggedIn() : sessionRoutes();
};

export default Greeting;