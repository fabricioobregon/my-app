import React, {/*useState*/} from 'react';
// import Login from './logincomponents/Login';

const token = JSON.parse(localStorage.getItem('Authentication'));
const id = token == null ? "":token.name;
const name = token == null ? "":token.name;

export const Public = (props) => {return <h3>Public</h3>}
export const Protected = () => {return <h3>Welcome {name}!</h3>}
