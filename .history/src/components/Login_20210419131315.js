import React, {useState} from 'react'
import LoginForm from './LoginForm'

export default function Login() {
    
    const adminUser = {
        username: "admin",
        password: "admin123"
    }

    const [user, setUser] = useState({username:""});
    const [error, setError] = useState("");
    
    const Login = details => {
        if(details.username == adminUser.username && details.password == adminUser.password){
            console.log("Merge")
        }
    }

    const Logout = details => {
        console.log("Logout")
    }

    return (
        <>
            <div className="login-app">
                {(user.username !== "") ? (
                <div className="welcome">
                    <h1>Welcome</h1>
                </div>
                    
                ) : (
                    <LoginForm Login={Login} error={error}/>
                )}
            </div>
        </>
    )
}
