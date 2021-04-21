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
        if(details.username === adminUser.username && details.password === adminUser.password){
            console.log("Merge")
            setUser({
                username: details.username

            })
        }
        else{
            console.log("Error")
        }
    }

    const Logout = details => {
        console.log("Logout")
    }

    return (
        <>
            <div className="login-app">
                {(user.username !== "") ? }
            </div>
        </>
    )
}
