import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //importamos el contexto de autenticación
  const { Login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Por favor, completa todos los campos.");
      return;
    } else if (Login(email, password)) {
      //utilizamos la función Login del contexto de autenticación
      toast.success("Inicio de sesión exitoso.");
      navigate("/dashboard");
    } else {
      toast.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
      return;
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <label>
          Correo electrónico
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ejemplo@correo.com"
          />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Contraseña"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Login;