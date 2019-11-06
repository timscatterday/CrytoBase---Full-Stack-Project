import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionRoutes = () => (
        <nav className="login_signup">
            <Link to="/login">Login</Link>
            <Link to="/signup">Get Started</Link>
        </nav>
    );
 
    const LoggedIn = () => (
        <hgroup class="header">
            <h2 class='header-email'>{currentUser.email}</h2>
            <button onClick={logout}>Logout</button>
        </hgroup>
    );

    return currentUser ? LoggedIn() : sessionRoutes();
};

export default Greeting;