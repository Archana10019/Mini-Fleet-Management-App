import{Routes,Route} from"react-router-dom";
import{useState}from"react";
import Login from "./components/Login";




function App(){
  const [isAuth,setIsAuth]=useState(false);
  return(
    <Routes>
      <Route path='/login'element={<Login setIsAuth={setIsAuth}/>}/>
    </Routes>
  )
}
export default App;