import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 ml-0 " href="#">
                Personal Website
            </a>
            <SearchBar />
            <ul  className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <Link className="nav-link" to ="/login">
                        Enter
                    </Link>
                </li>
            </ul>
        </nav>
      );
}
 
export default Navbar;
