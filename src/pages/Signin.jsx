import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((value) => console.log("Signin successful"))
    .catch((err)=> console.log(err));
    
  };

  return (
    <div className="signin-page">
      <label>Enter you email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email"
      />

      <label>Enter your password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password"
      />
      <button onClick={signinUser}>Signin</button>
    </div>
  );
};

export default SigninPage;
