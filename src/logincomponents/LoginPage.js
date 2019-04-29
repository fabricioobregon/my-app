import React, {useState} from 'react';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        localStorage.removeItem('Authentication');
        fetch("http://localhost:9000/user/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password})
        })
            .then(response =>  {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Authentication error');
                }
            })
            .then(json => {
                localStorage.setItem('Authentication', JSON.stringify(json));
                alert("Welcome "+ json.name);
                props.history.push("/protected")
                 },)
            .catch(error => {alert(error.message)});

    }

    const changeEmail = event => {
        setEmail(event.target.value);
        console.log("email:" + email)
    }

    const changePassword = event => {
        setPassword(event.target.value);
        console.log("password:" + password)
    }

    return(

        <div className="autorForm">
            <h1>Login</h1>
            <form className="pure-form pure-form-aligned" >
                <h4>username:</h4>
                <input type="text" name="name" onChange={changeEmail}></input>
                <h4>password:</h4>
                <input type="password" name="password" onChange={changePassword}></input>
                <div>
                    <button type="submit" className="pure-button pure-button-primary" onClick={onSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}




