import React from 'react';
const Skill = () => {
    return (
        <div className="container-fluid">
            <div className="card m-2">
                <p className="card-title text-center m-2">My Skills</p>
                <div className="card-body">
                    Linux
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: '80%' }}
                        />
                    </div>
                    Node.js
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: '90%' }}
                        />
                    </div>
                    React
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: '80%' }}
                        />
                    </div>
                    Vue.js
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: '50%' }}
                        />
                    </div>
                    C Sharp
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            style={{ width: '85%' }}
                        />
                    </div>
                    React native
                    <div className="progress m-2">
                        <div
                            className="progress-bar bg-secondary"
                            role="progressbar"
                            style={{ width: '95%' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Skill;