import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'


class Profile extends Component {
    
    state = {
        selectedFile: null
    }

     fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    fileUploadHandler = () => {
        axios.post()
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
                <button onClick={this.fileUploadHandler}>Upload Profile Picture</button>
            </>
        )
    }
}

export default Profile;