import React from 'react';
const Pagination = (props) => {
    return ( 
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" onClick="">
                        1
                    </a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Pagination;