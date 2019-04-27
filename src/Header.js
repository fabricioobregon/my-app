import React, {/*useState*/} from 'react';
// import Login from './logincomponents/Login';

export const Public = (props) => {return <h3>Public</h3>}
export const Protected = () => {return <h3>Protected page here with everything {localStorage.getItem('Authentication')}</h3>}
// export const LoginPage = () => {return <Login/>}

// export default function (props) {
//
// return <h3>{props.public}</h3>
// }


// {/*<this will render/>*/}
