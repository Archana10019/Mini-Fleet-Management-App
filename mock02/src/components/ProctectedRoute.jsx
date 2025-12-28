import { Children } from "react";
import { Navigate } from "react-router-dom";
const ProctectedRoute=({ isAuth,
    Children})=>{
        if(!isAuth){
            return<Navigate to="/login"/>
        }
        return Children;
    }
    export default ProctectedRoute;