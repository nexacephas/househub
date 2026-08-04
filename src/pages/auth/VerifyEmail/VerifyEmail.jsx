import "./VerifyEmail.css";

import { MailCheck } from "lucide-react";

import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { verifyEmail } from "../../../services/auth.service";

export default function VerifyEmail(){

const[searchParams]=useSearchParams();

const[status,setStatus]=useState("pending");

useEffect(()=>{
const token=searchParams.get("token");

if(!token){
setStatus("missing");
return;
}

let active=true;

verifyEmail(token)
.then(()=>{
if(active)setStatus("verified");
})
.catch(()=>{
if(active)setStatus("failed");
});

return()=>{
active=false;
};
},[searchParams]);

const title={
pending:"Verifying Email",
verified:"Email Verified",
failed:"Verification Failed",
missing:"Verification Link Missing",
}[status];

const message={
pending:"Please wait while we verify your HouseHub account.",
verified:"Your email has been verified. You can now sign in.",
failed:"This verification link is invalid or has expired.",
missing:"Open the verification link from your email to activate your account.",
}[status];

return(

<div className="forgot-card">

<MailCheck

size={70}

className="verify-icon"

/>

<h2>{title}</h2>

<p>

{message}

</p>

<Link

to="/login"

className="login-btn"

>

Go to Login

</Link>

</div>

);

}
