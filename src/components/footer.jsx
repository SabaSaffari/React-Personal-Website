import React from 'react';

const Footer = () => {
    return ( 
        <footer className="float-right navbar navbar-dark bg-dark col-md-9 ml-ms-auto col-lg-10 px-4 shadow">
            <div className="copyright">
                <span className="fa fa-copyright m-1"/>
                    All rights reserved
            </div>
            <div className="socialmedia">
                <a className="fa fa-instagram m-1"
                   href="https://instagram.com"
                />  
                <a className="fa fa-facebook-official m-1"
                   href="https://facebook.com"
                />  
            </div>
        </footer>
     );
};
 
export default Footer;