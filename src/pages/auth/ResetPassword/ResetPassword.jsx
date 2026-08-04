import "./ResetPassword.css";

import { Lock, Eye, EyeOff } from "lucide-react";

import { useState } from "react";

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { resetPassword } from "../../../services/auth.service";

export default function ResetPassword(){

const navigate=useNavigate();

const[searchParams]=useSearchParams();

const[show,setShow]=useState(false);

const[password,setPassword]=useState("");

const[confirm,setConfirm]=useState("");

const[loading,setLoading]=useState(false);

async function handleReset(){
const token=searchParams.get("token");

if(!token){
return toast.error("Reset token is missing.");
}

if(password.length<8){
return toast.error("Password must be at least 8 characters.");
}

if(password!==confirm){
return toast.error("Passwords do not match.");
}

try{
setLoading(true);
await resetPassword({token,password});
toast.success("Password reset successfully.");
navigate("/login");
}catch(error){
toast.error(error.response?.data?.message||"Unable to reset password.");
}finally{
setLoading(false);
}
}

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

<button
className="login-btn"
type="button"
onClick={handleReset}
disabled={loading}
>

{loading?"Resetting...":"Reset Password"}

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
