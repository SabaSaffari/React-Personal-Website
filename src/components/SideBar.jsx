import React, { Component } from 'react';
import getNavLinks from '../services/navLinks';
import UserInfo from './common/userInfo';

class Sidebar extends Component {
    render() { 
        const navLinks = getNavLinks();
        return ( 
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <UserInfo
                        imgUrl="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        fullname="Saba Saffari"
                        text="Frontend Developer"
                    />
                    <hr className="shadow"/>
                    <ul className="nav flex-column">
                        {navLinks.map(nav => (
                            <li className="nav-item" key={nav.id}>
                                <a className="nav-link" href={nav.link}>
                                    <span className={nav.icon} />
                                    <span className="m-2"> {nav.text}</span>
                                    {nav.count ? (
                                        <span className="badge-danger badge-pill">
                                            {nav.count}
                                        </span>
                                    ) : null}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Sidebar;

