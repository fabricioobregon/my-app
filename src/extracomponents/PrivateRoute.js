import React from 'react';
import {BrowserRouter as Router, Route, Redirect, withRouter, Switch} from 'react-router-dom'

export default function PrivateRoute(props, ...rest)
{
    <Route {...rest} render={(props) => (
        props.isA === true
            ? <Component {} />
            : <Redirect to={{
                pathname: '/loginpage',
                state: {from: props.location}
            }}/>
    )}/>
}
