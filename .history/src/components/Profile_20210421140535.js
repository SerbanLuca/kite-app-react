import React from 'react'

export default function Profile() {
    return (
        <div>
           <nav className="nav">
                <Link to="/">
                    <h1 className="navbar-logo">KYTE</h1>
                </Link>
                <ul className="narbar-ul">
                    <Link to = "/">
                        <li>Home</li>
                    </Link>
                    <Link to = "/dashboard">
                        <li>Table</li>
                    </Link>
                    <Link to = "/profile">
                        <li>Your Profile</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
