import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const {use, logOut} = useAuth();

    const handleLogout = () => {
        if (logOut()) {
            navigate("/");
        }
    };

    return(
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1 className="dashboard-titile">¡Bienvenido al Dashboard!</h1>
                <p className="dashboard-user">
                    Hola, <span>{use || "Usuario logueado"}</span>
                </p>
                <button className="dashboard-button" onClick={handleLogout}> Cerrar sesion </button>
            </div>
        </div>
    );
};

export default Dashboard;