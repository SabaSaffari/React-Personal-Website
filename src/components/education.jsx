import React from 'react';
const Education = () => {
    return (
        <div className="container-fluid">
            <div className="card m-2">
                <p className="card-title text-center m-2">My Education</p>

                <div className="card-body">
                    <ul className="list-group-item-warning">
                        <li className="lead list-unstyled">
                            <span className="fa fa-graduation-cap" /> Education
                        </li>

                        <li>
                            Diploma of computer science
                        </li>
                        <li>
                            Bachelor of computer science
                        </li>
                        <li>
                            Master of computer science
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Education;