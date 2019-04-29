import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch} from 'react-router-dom'
import {Protected, userid, username} from './Header.js';
import LoginPage from './logincomponents/LoginPage';
import Logout from './logincomponents/Logout';
import FetchGBooks from './bookcomponents/FetchGBooks';
import Example from './Example';

export default function App () {
    const [layout, setLayout] = useState('');
    const [menu, setMenu] = useState('');
    const [menuLink, setMenuLink] = useState('menu-link');
    const [main, setMain] = useState('');

    function menuClick(e) {
        e.preventDefault();
        setLayout('active');
        setMenu('active');
        setMenuLink('menu-link active');
        setMain('active');
    };

    function contentClick(e) {
        e.preventDefault();
        setLayout('');
        setMenu('');
        setMenuLink('menu-link');
        setMain('');
    };

    const isAuthenticated = () => {
        return localStorage.getItem('Authentication') !== null;
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            isAuthenticated() === true
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/loginpage',
                    state: { from: props.location }
                }} />
        )} />
    )

    return (
        <Router>
        <div id="layout" className={layout}>

            <a href="#menu" id="menuLink" className={menuLink} onClick={menuClick}>
                <span></span>
            </a>

            <div id="menu" className={menu}>
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="#">ComIT</a>

                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><Link to="/bookstore" className="pure-menu-link">Protected</Link></li>
                        <li className="pure-menu-item"><Link to="/fetchgBooks" className="pure-menu-link">FetchGBooks</Link></li>
                        <li className="pure-menu-item"><Link to="/example" className="pure-menu-link">Example</Link></li>
                        <li className="pure-menu-item"><Link to="/logout" className="pure-menu-link">Logout</Link></li>
                    </ul>
                </div>
            </div>

            <div id="main" className={main}>
            <div className="content" onClick={contentClick}>
            <Switch>
                <PrivateRoute path='/bookstore' component={Protected} props={username}/>
                <PrivateRoute path='/fetchgBooks' component={FetchGBooks} props={username}/>
                <PrivateRoute path='/example' component={Example} props={username}/>
                <PrivateRoute path='/logout' component={Logout} props={username}/>
                <Route path="/loginpage" component={LoginPage} />
                <Redirect from="/*" to="/bookstore"   />
            </Switch>
            </div>
            </div>
        </div>
        </Router>

    )

}
