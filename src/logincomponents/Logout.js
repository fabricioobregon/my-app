import { Component } from 'react';
import {browserHistory} from  'react-router-dom';

export default class Logout extends Component {

    componentWillMount(){
        localStorage.removeItem('Authentication');
        browserHistory.push('/');
    }

    render(){
        return null;
    }
}
