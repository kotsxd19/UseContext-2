import React from "react";
import {Navigate, Outlet} from "react-router-dom"
import {useAuth} from "../context/AuthContext"

const PrivateRoute = () => {
    const {isLoggedIn} = useAuth();
    //si el usaurio no esta autnticado, redirige a la pagina de inicio
    return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute