import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
