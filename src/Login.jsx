import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username == 'admin' && password == 'admin')
        {
            localStorage.setItem("username", username);
            localStorage.setItem("isLoggedIn", true);
            console.log(localStorage.getItem("isLoggedIn"));
            navigate('/profile');
        }
        
        // else incorrect username and password
    } 

    return (
        <div className='auth-form-container'>
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit" disabled={!username || !password}>Login</button>
            </form>

            <div> Don't have an account?
            <button className='link-btn' onClick={() => props.onFormSwitch("register")} >
                Register
            </button>
            </div>
        </div>
    )
}
