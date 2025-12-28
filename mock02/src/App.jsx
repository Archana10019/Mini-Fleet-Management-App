import{Routes,Route} from"react-router-dom";
import{useState}from"react";
import Login from "./components/Login";
import AdminDashboard from'./components/AdminDashboard';
import ProctectedRoute from "./components/ProctectedRoute";






function App(){
  const [isAuth,setIsAuth]=useState(false);
  return(
    <Routes>
      <Route path='/login'element={<Login setIsAuth={setIsAuth}/>}/>
      
    </Routes>
  )
}
export default App;

