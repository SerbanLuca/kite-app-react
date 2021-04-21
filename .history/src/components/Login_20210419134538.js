import React from 'react'

export default function Login() {
    return (
        <>
            <form>
                <div className="form">
                    <h1>Kyte</h1>
                    <div className="username-div">
                        <p className="username-text">Username</p>
                        <input type="text" className="username-form" placeholder="username..."></input>
                    </div>
                    <div className="password-div">
                        <p className="password-text">Password</p>
                        <input type="password" className="password-form" placeholder="password..."></input>
                    </div>
                </div>
            </form>
        </>
    )
}
