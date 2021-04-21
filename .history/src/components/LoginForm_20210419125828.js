import React, {useState} from 'react'

export default function LoginForm({Login, error}) {
    return (
        <form>
            <div className="login-form">
                <h1>KITE</h1>
                {/*ERROR*/}
                <div className="login-group">
                    <label>Username: </label>
                    <input type="text"></input>
                </div>
                <div className="login-group">
                    <label>Password: </label>
                    <input type="password"></input>
                </div>
                <input type="submit" value="LOGIN"></input>
            </div>
        </form>
    )
}
