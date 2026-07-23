import "./ForgotPassword.css";

import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ForgotPassword(){

const[email,setEmail]=useState("");

const[sent,setSent]=useState(false);

if(sent){

return(

<div className="forgot-card">

<h2>Check Your Email</h2>

<p>

If an account exists for

<strong>{email}</strong>

you'll receive a password reset link shortly.

</p>

<Link to="/login">

Back to Login

</Link>

</div>

);

}

return(

<div className="forgot-card">

<h2>Forgot Password?</h2>

<p>

Enter your email address and we'll send you a reset link.

</p>

<div className="input-wrapper">

<Mail size={20}/>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

</div>

<button

className="login-btn"

onClick={()=>setSent(true)}

>

Send Reset Link

</button>

<Link

to="/login"

className="back-link"

>

Back to Login

</Link>

</div>

);

}