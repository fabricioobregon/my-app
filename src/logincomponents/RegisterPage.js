import React, {useState} from 'react';

export default function Login(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function registerUser(e) {
        e.preventDefault();
        localStorage.removeItem('Authentication');
        fetch("http://localhost:9000/user/register", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name, email: email, password: password})
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Registration error');
                }
            })
            .then(json => {
                localStorage.setItem('Authentication', JSON.stringify(json));
                alert("Welcome " + json.name);
                props.history.push("/protected")
            },)
            .catch(error => {
                alert(error.message)
            });
    }

    function redirectLogin(){
        props.history.push("/login");
    }

    const changeName = event => {setName(event.target.value);}
    const changeEmail = event => {setEmail(event.target.value);}
    const changePassword = event => {setPassword(event.target.value);}

    return (

        <div className="autorForm">
            <h3>Register</h3>
            <form className="pure-form pure-form-stacked">
                <fieldset>
                    <div className="pure-g">

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="name">Name</label>
                            <input id="name" className="pure-u-23-24" type="text" value={name} onChange={changeName}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" className="pure-u-23-24" type="text" value={email}
                                   onChange={changeEmail}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="password">Password</label>
                            <input id="password" className="pure-u-23-24" type="password" value={password}
                                   onChange={changePassword}/>
                        </div>

                    </div>
                    <button type="submit" className="pure-button pure-button-primary" onClick={redirectLogin}>Return</button>
                    &nbsp;&nbsp;
                    <button type="submit" className="pure-button pure-button-primary" onClick={registerUser}>Register
                    </button>
                </fieldset>
            </form>
        </div>
    )
}




