import React, { useState } from 'react'
import Header from '../Components/Header'
// import InputComponent from '../Components/common/input'
// import Button from '../Components/common/Button';
import SignupForm from '../Components/SignupComponents/SignupFrom';
import LoginForm from '../Components/SignupComponents/LoginForm';


export default function SignUpPage() {


  const [flag , setFlag] = useState(false);



  return (
    <div><Header />
    
      <div className="input-wrapper">
        {!flag ? <h1>SignUp</h1>: <h1>Login</h1>}
       {!flag? <SignupForm/>:<LoginForm/>}
       {!flag ? (<p style={{ cursor:"pointer"}} onClick={()=>setFlag(!flag)}>Already have an Account Click here to Login.</p>): 
       (<p style={{ cursor:"pointer"}} onClick={()=>setFlag(!flag)}>Dont have an Account Click here to Signup</p>)}
      
      
      </div>
    </div>
  )
}
