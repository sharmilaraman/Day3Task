import React from 'react'
import { useState } from 'react'
import '../components/Login.css'

const Login = () => {
     const [email,setEmail]=useState("");
     const [password, setPassword] = useState("");
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const handleSubmit = (e)=>{
     e.preventDefault();
     if (!emailPattern.test(email)) {
          alert("InValid email format");
          return;
        }
        if (password.length < 6) {
          alert("Password must be at least 6 characters!");
          return;
        }
        
        alert("Login Successfully");
 }

  return (
     <div className="login-container">
     <h1 className="logo">BINGO</h1>
       <h2>
         Login to stream <span className="highlight">Unlimited Movies</span>
       </h2>
       <form onSubmit={handleSubmit}>
       <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
       <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
       <button className="login-btn">Log In</button><br />
       </form>
       <button className="google-btn">Continue with Google</button>
       <p>
         Don't have an account? <span className="login-link">Sign Up</span>
       </p>
     </div>
  )
}

export default Login
