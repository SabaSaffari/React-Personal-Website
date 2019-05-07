import React from 'react';
const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-light border rounded m-2">
                <div className="col">
                    <p className="lead m-2">
                        <span className="fa fa-envelope m-1" />
                         Contact us
                    </p>
                </div>
                <div className="col-6">
                    <form>
                        <div className="card border-primary rounded m-2">
                            <div className="card-header p-0">
                                <div className="bg-info text-white text-center py-2">
                                    <h3>
                                        <i className="fa fa-envelope" /> 
                                        Contact me form
                                          
                                    </h3>
                                    <p className="m-0">
                                        Please fill out the form and then click the submit button  
                                    </p>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-user text-info" />
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="fullname"
                                            placeholder=" Firstname and Lastname "
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-envelope text-info" />
                                            </div>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email address"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-comment text-info" />
                                            </div>
                                        </div>
                                        <textarea
                                            className="form-control"
                                            placeholder="Text"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <input
                                        type="submit"
                                        value="Submit"
                                        className="btn btn-info btn-block rounded-0 py-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;