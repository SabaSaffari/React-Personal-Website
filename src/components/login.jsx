import React from 'react';

const Login = ({history}) => {
    const handleLogin = () => {
        history.replace('/');
    }
    return(
        <form className="form-signin border rounded m-2 mx-auto bg-light shadow">
            <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
            <label for="inputEmail" className="sr-only">
                Email address
            </label>
            <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
            />
            <label for="inputPassword" className="sr-only">
                Password
            </label>
            <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
            />

            <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                onClick={handleLogin}
            >
                Enter
            </button>
        </form>
    )
};
 
export default Login;