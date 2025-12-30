import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from"./components/ProctectedRoute";


// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Login from "./components/Login";
// import AdminDashboard from "./components/AdminDashboard";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    if (auth === "true") {
      setIsAuth(true);
    }
  }, []);

  return (
  
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
 
  );
}

export default App;
