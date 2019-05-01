import React from 'react';


const token = JSON.parse(localStorage.getItem('Authentication'));
const id = token == null ? "":token.name;
const name = token == null ? "":token.name;


export const Public = (props) => {return <h3>Public</h3>}
export const Protected = () => {return <div className="content"><h3>Welcome {name}!</h3></div>}
export function username(){
    return (name);
}

export function userid(){
    return (id);
}

