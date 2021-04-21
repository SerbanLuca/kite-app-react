import React, {useState} from 'react'

export default function LoginForm({Login, error}) {

    const [details, setDetails] = useState({username: "", password: ""});

    const SubmitHandler = e =>{
        e.preventDafault();

        Login(details);
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className="login-form">
                <h1>KITE</h1>
                {/*ERROR*/}
                <div className="login-group">
                    <label>Username: </label>
                    <input type="text" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input>
                </div>
                <div className="login-group">
                    <label>Password: </label>
                    <input type="password" onChange={e => setDetails({...details, passwrod: e.target.value})} value={details.password}></input>
                </div>
                <input type="submit" value="LOGIN"></input>
            </div>
        </form>
    )
}
