import React, { useState } from 'react'
import InputComponent from '../../common/input';
import Button from '../../common/Button';

function SignupForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("handleSignUp");
    }
    return (
        <div>
            <InputComponent state={fullName} setState={setFullName} placeholder="Full Name" type="text" required={true} />
            <InputComponent state={email} setState={setEmail} placeholder="Email" type="email" required={true} />
            <InputComponent state={password} setState={setPassword} placeholder="Password" type="password" required={true} />
            <InputComponent state={confirmPassword} setState={setConfirmPassword} placeholder="Confirm Password" type="password" required={true} />
            <Button text={"SignUp"} onClick={handleSignUp} />

        </div>
    )
}

export default SignupForm