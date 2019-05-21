import React, { Component } from 'react';
import {login} from '../services/loginService';
import { toast } from 'react-toastify';

class Login extends Component {
    state = {  
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

       try {
           const {data} = await login(this.state.email, this.state.password);
           localStorage.setItem('token', data);
           this.props.history.replace('/admin');
       } catch (ex) {
           if(ex.response && ex.response.status === 400)
                toast.error('This is a wrong Email or Password')
       }
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}  className="form-signin border rounded m-2 mx-auto bg-light shadow">
                <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
                <label for="inputEmail" className="sr-only">
                    Email address
                </label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
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
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}
                    required
                />

                <button
                    class="btn btn-lg btn-primary btn-block"
                    type="submit"
                >
                    Enter
                </button>
            </form>
         );
    }
}
 
export default Login;
