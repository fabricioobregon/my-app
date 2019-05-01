import React, {useState} from 'react';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = event => {
        event.preventDefault();
        localStorage.removeItem('Authentication');
        fetch("http://localhost:9000/user/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password})
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Authentication error');
                }
            })
            .then(json => {
                localStorage.setItem('Authentication', JSON.stringify(json));
                alert("Welcome " + json.name);
                props.history.push("/bookstore");
            },)
            .catch(error => {
                alert(error.message)
            });
    }

    const changeEmail = event => {setEmail(event.target.value);}
    const changePassword = event => {setPassword(event.target.value);}

    function redirectRegister(){
        props.history.push("/register");
    }

    return (

        <div className="autorForm">
            <form className="pure-form pure-form-aligned">
                <h3>LOGIN</h3>
                <fieldset>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" className="pure-u-23-24" type="text" value={email} onChange={changeEmail}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="password">Password</label>
                            <input id="password" className="pure-u-23-24" type="password" value={password} onChange={changePassword}/>
                        </div>

                    </div>
                    <br/>
                    <div>
                        <button type="submit" className="pure-button pure-button-primary" onClick={onLogin}>Login</button>
                        &nbsp;&nbsp;
                        <button type="text" className="pure-button pure-button-primary" onClick={redirectRegister}>Register</button>
                    </div>


                </fieldset>
            </form>
        </div>
    )
}
