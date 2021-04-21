import React from 'react'

export default function Login() {
    return (
        <>
            <form>
                <div className="username-div">
                    <label className="username-text">Username</label>
                    <input type="text" className="username-form" placeholder="username..."></input>
                </div>
                <input type="password" className="password" placeholder="password..."></input>
            </form>
        </>
    )
}
