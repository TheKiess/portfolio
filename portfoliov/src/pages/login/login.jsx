import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./loginstyle.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@email.com" && senha === "admin") {
      navigate("/login/dashboard");
    } else {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Entrar na sua conta</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="admin@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="admin"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
