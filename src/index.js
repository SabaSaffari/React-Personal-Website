import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './css/index.css';
import './css/navbar.css';
import './css/sidebar.css';
import './css/login.css';
import './css/404.css';
import App from './App';
import Login from './components/login';
import NotFound from './components/notFound';
import Dashboard from './components/admin/dashboard';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/admin" 
                    render={() => {
                        if(localStorage.getItem('token')) return <Dashboard />;
                        else return <Redirect to= "/" />
                        }} 
            />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" component={App}/>
            <Redirect to="/not-found" />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);

serviceWorker.unregister();
