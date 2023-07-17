import React from "react";

const SigninPage = () => {
    return(
        <div className="signin-page">
        <label>Enter you email</label>
        <input type="email" placeholder="Enter your email"/>
        <label>Enter your password</label>
        <input type="password" placeholder="Enter your password"/>
        <button>Signin</button>

        </div>
    );
}

export default SigninPage;