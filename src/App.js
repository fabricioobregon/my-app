import React from 'react'
// import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Redirect, withRouter, Switch} from 'react-router-dom'
// import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import {Protected} from './Header.js';
import LoginPage from './logincomponents/LoginPage';




export default function App () {

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



    const AuthButton = withRouter(({ history }) => (
        isAuthenticated() === true ? (
            <p>
                Welcome! <button onClick={() => {
                localStorage.clear();
                history.push('/loginpage')
            }}>Sign out</button>

            </p>
        ) : (
            <span></span>
        )
    ))

    return (
        <Router>
                <AuthButton/>
            <Switch>
                <PrivateRoute path='/protected' component={Protected} isAuthenticated={isAuthenticated}/>
                <Route path="/loginpage" component={LoginPage} />
            </Switch>
        </Router>
    )


}









// class Login extends React.Component {
//     state = {redirectToReferrer: false}
//
//     login = () => {
//         loginState.authenticate(() => {
//             this.setState(() => ({
//                 redirectToReferrer: true
//             }))
//         })
//     }
//
//     render() {
//         const { from } = this.props.location.state || { from: { pathname: '/loginpage' } }
//         const { redirectToReferrer } = this.state
//
//         if (redirectToReferrer === true) {
//             return <Redirect to={from} />
//         }
//
//         return (
//             <div>
//                 <p>You must log in to view the page</p>
//                 <button onClick={this.login}>Log in</button>
//             </div>
//         )
//     }
// }










