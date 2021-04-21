import React, {useState} from 'react'

export default function Login() {
    
    const adminUser = {
        username: "admin"
        password: "admin123"
    }

    const [user, setUser] = useState({username:""});
    const [error, setError] = useState("");
    
    const Login = details => {
        console.log(details)
    }

    const Logout = details => {
        console.log("Logout")
    }

    return (
        <>
            <div className="login-app">
                
            </div>
        </>
    )
}
