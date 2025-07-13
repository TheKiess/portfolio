import React from "react";
import "./login.css";

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
            placeholder="seuemail@email.com"
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="••••••••"
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
