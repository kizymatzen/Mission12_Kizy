import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>College Basketball Teams</h1>
            <p>Welcome to our NCAA basketball teams website. Here, you can find information on all the basketball teams in the NCAA.</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/team-list">Team List</Link>
                {/* Add more navigation links as needed */}
            </nav>
        </header>
    );
}

export default Header;
