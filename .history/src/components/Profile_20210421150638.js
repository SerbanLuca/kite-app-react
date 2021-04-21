import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class Profile extends Component {
    
     fileSelectedHandler = e => {
        console.log(e)
    }
     
    render(){
        return (
            <>
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
                <input type="file" onChange={this.fileSelectedHandler} />
            </>
        )
    }
}

export default Profile;