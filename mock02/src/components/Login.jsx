import { useState,useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login =({setIsAuth})=>{
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const emailRef= useRef();
    const navigate= useNavigate();
    useEffect(()=>{
        emailRef.current.focus();
    },[]);

    const handleLogin=()=>{
        if(email==="admin@gamil.com"&&password==="123"){
            alert("login sucessfully");
            setIsAuth(true);
            navigate("/admin");
        }else{
            alert("invaild credentias")
        }
    }


return(
    <div>
        <h2>Login</h2>
      <input ref={emailRef}
      type="email"
      placeholder="enter the email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/>

      <input
      type="password"
      placeholder="Entre the password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}/>



      <button onClick={handleLogin}>Login.</button>
    </div>
)
};
export default Login;