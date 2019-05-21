import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getCourseCount} from '../services/courseService';
import getNavLinks from '../services/navLinks';
import UserInfo from './common/userInfo';

class Sidebar extends Component {

    state={
        courseCount: ''
    };
    async componentDidMount() {
        const {data: courseCount } = await getCourseCount();
        this.setState({cousreCount: courseCount.count});
    }
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
                                <Link className="nav-link" to={nav.link}>
                                    <span className={nav.icon} />
                                    <span className="m-2"> {nav.text}</span>
                                    {nav.text === 'Courses' ? (
                                        <span className="badge-danger badge-pill">
                                            {this.state.courseCount}
                                        </span>
                                    ) : null}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Sidebar;

