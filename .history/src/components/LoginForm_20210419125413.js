import React from 'react'

export default function LoginForm() {
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
               
            </div>
        </form>
    )
}
