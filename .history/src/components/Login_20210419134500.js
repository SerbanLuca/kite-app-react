import React from 'react'

export default function Login() {
    return (
        <>
            <form>
                <div className="form">
                    <h1>Kyte</h1>
                    <div className="username-div">
                        <label htmlFor="username" className="username-text">Username</label>
                        <input type="text" className="username-form" placeholder="username..."></input>
                    </div>
                    <div className="password-div">
                        <label className="password-text">Password</label>
                        <input type="password" className="password-form" placeholder="password..."></input>
                    </div>
                </div>
            </form>
        </>
    )
}
