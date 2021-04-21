import React, {useState} from 'react'
import {Link} from 'react-router-dom';


export default function Login() {

    const adminUser = {
        username: "admin",
        password: "password"
    }

    /*const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    async function login()
    {
        console.warn(user, password)
        let item = {user, password}
        let result = await fetch("https://607d664c184368001769da4b.mockapi.io/login", {
            method:"GET",
            body: JSON.stringify(item)
        })
        result = await result.json();
    }*/

    return (
        <>
            <form>
                <div className="form">
                    <h1 className="title">Kyte</h1>
                    <div className="username-div">
                        <p className="username-text">Username</p>
                        <input type="text" className="username-form" placeholder="username..."></input>
                    </div>
                    <div className="password-div">
                        <p className="password-text">Password</p>
                        <input type="password" className="password-form" placeholder="password..."></input>
                    </div>
                    <Link to="/map">
                        <button className="login-btn">Login</button>
                    </Link>
                </div>
            </form>
        </>
    )
}