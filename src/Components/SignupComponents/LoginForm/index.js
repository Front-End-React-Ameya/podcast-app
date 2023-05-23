import React, { useState } from 'react'
import InputComponent from '../../common/input';
import Button from '../../common/Button';

function LoginForm() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("handleSignUp");
    }
    return (
        <div>
            
            <InputComponent state={email} setState={setEmail} placeholder="Email" type="email" required={true} />
            <InputComponent state={password} setState={setPassword} placeholder="Password" type="password" required={true} />
            
            <Button text={"Login"} onClick={handleLogin} />

        </div>
    )
}

export default LoginForm