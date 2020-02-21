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
            <div>
                <Link className='trade_link' to={`/trade`}>Trade</Link>
            </div>
            <div className="header">
                <h2 className='header-email'>{currentUser.email}</h2>
                <button className='logout_button' onClick={logout}>Logout</button>
            </div>
        </div>
    );

    return currentUser ? LoggedIn() : sessionRoutes();
};

export default Greeting;