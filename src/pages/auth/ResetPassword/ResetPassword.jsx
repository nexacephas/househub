import "./ResetPassword.css";

import { Lock, Eye, EyeOff } from "lucide-react";

import { useState } from "react";

import { Link } from "react-router-dom";

export default function ResetPassword(){

const[show,setShow]=useState(false);

const[password,setPassword]=useState("");

const[confirm,setConfirm]=useState("");

return(

<div className="forgot-card">

<h2>Create New Password</h2>

<p>

Your new password must be different from your previous one.

</p>

<div className="input-wrapper">

<Lock size={20}/>

<input

type={show?"text":"password"}

placeholder="New Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

<button

className="password-toggle"

type="button"

onClick={()=>setShow(!show)}

>

{show?<EyeOff size={18}/>:<Eye size={18}/>}

</button>

</div>

<div className="input-wrapper">

<Lock size={20}/>

<input

type="password"

placeholder="Confirm Password"

value={confirm}

onChange={(e)=>setConfirm(e.target.value)}

/>

</div>

<button className="login-btn">

Reset Password

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