import React, {/*useState*/} from 'react';
// import Login from './logincomponents/Login';

const id = JSON.parse(localStorage.getItem('Authentication')).id;
const name = JSON.parse(localStorage.getItem('Authentication')).name;

export const Public = (props) => {return <h3>Public</h3>}
export const Protected = () => {return <h3>Welcome {name}!</h3>}
