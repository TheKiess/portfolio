import React from "react";
import "./login.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="seuemail@email.com" />
          <label>Senha</label>
          <input type="password" placeholder="••••••••" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
