import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import LoginPage from './logincomponents/LoginPage';
import Logout from './logincomponents/Logout';
import MyLibrary from './bookcomponents/MyLybrary';
import BookRegister from './bookcomponents/BookRegister';
import Example from './Example';
import RegisterPage from "./logincomponents/RegisterPage";

export default function App() {
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

    const PrivateRoute = ({component: Component, ...rest}) => (
        <Route {...rest} render={(props) => (
            isAuthenticated() === true
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/loginpage',
                    state: {from: props.location}
                }}/>
        )}/>
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
                            <li className="pure-menu-item"><Link to="/bookstore" className="pure-menu-link">My Lybrary</Link></li>
                            <li className="pure-menu-item"><Link to="/bookregister" className="pure-menu-link"> Register Book</Link></li>
                            <li className="pure-menu-item"><Link to="/example" className="pure-menu-link">Example</Link></li>
                            <li className="pure-menu-item"><Link to="/logout" className="pure-menu-link">Logout</Link></li>
                        </ul>
                    </div>
                </div>

                <div id="main" className={main}>
                    <div className="content" onClick={contentClick}>
                        <div className="header">
                            <h1>ComIT Personal Library</h1>
                        </div>
                        <Switch>
                            <PrivateRoute path='/bookstore' component={MyLibrary}/>
                            <PrivateRoute path='/bookregister' component={BookRegister}/>
                            <PrivateRoute path='/example' component={Example}/>
                            <PrivateRoute path='/logout' component={Logout}/>
                            <Route path="/loginpage" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                            <Redirect from="/*" to="/bookstore"/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>

    )

}
