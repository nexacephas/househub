import "./VerifyEmail.css";

import { MailCheck } from "lucide-react";

import { Link } from "react-router-dom";

export default function VerifyEmail(){

return(

<div className="forgot-card">

<MailCheck

size={70}

className="verify-icon"

/>

<h2>

Verify Your Email

</h2>

<p>

We've sent a verification link to your email.

Click the link to activate your HouseHub account.

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