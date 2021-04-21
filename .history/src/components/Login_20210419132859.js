import React, {useState} from 'react'

export default function Login() {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
    }

    const Logout = () => {
        console.log("Logout");
    }

    return (
        <div>
            
        </div>
    )
}
