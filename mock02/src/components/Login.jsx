import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault(); // 🔴 VERY IMPORTANT

    console.log("Login clicked"); // DEBUG

    if (email === "admin@gmail.com" && password === "1233") {
      alert("Login success");

      // ✅ AUTH SET HERE
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);

      console.log("Auth saved, navigating...");
      navigate("/admin");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        ref={emailRef}
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;





