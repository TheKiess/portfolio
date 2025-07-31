# 🚀 Portfólio Pessoal - React

Este é o meu portfólio pessoal desenvolvido com **React**. O objetivo é apresentar, de forma moderna, responsiva e interativa, minhas habilidades, experiências e projetos na área de desenvolvimento de software.

---

## ✨ Sobre o Projeto

Este portfólio foi criado com foco na experiência do usuário e identidade visual pessoal. Ele utiliza animações suaves, design responsivo e uma estrutura clara para destacar meu perfil profissional, seja em desktops, tablets ou dispositivos móveis.

A versão mais recente traz um **dashboard interativo** alimentado por uma API mock, demonstrando minha capacidade de trabalhar com frontend + backend integrados.

---

## 💠 Tecnologias Utilizadas

- ⚛️ **React** – Biblioteca principal para construção da interface
- 💛 **JavaScript (ES6+)** – Lógica de funcionamento e interatividade
- 📄 **HTML5** – Estrutura semântica dos componentes
- 🎨 **CSS3** – Estilização responsiva e animações personalizadas
- 🔁 **React Router DOM** – Roteamento entre páginas
- 🛠️ **Express (Node.js)** – Backend simulado para API do dashboard

> Outras tecnologias que posso incluir futuramente: **Docker, PHP, Git**, entre outras.

---

## ⚙️ Funcionalidades

- ✅ Design moderno e responsivo
- ✅ Animações suaves em elementos interativos
- ✅ Navegação fluida entre seções
- ✅ Estrutura organizada: Sobre, Habilidades, Projetos, Contato, Login
- ✅ Efeitos visuais como:
  - Animação de digitação
  - Slideshow com transição lateral e indicadores clicáveis
- ✅ **Dashboard com:**
  - Cartões de estatísticas dinâmicas (usuários, serviços, pedidos)
  - Últimas atualizações consumidas de uma API
  - Componentes reutilizáveis (`StatCard`)
  - Backend simulado via Express

---

## 📁 Estrutura de Pastas

src/                                                             <br/>
├── components/ # Componentes reutilizáveis (StatCard etc.)      <br/>
├── pages/      # Páginas principais (Home, Login, Dashboard...) <br/>
├── services/   # Comunicação com API (ex: dashboardService)     <br/>
├── App.jsx     # Componente raiz da aplicação                   <br/>
└── main.jsx    # Entrada principal da aplicação                 <br/>

---

## 📦 Instalação e Uso

Clone este repositório e instale as dependências:

```bash
git clonehttps://github.com/TheKiess/portfolio

cd portfoliov

npm install
```

▶️ Rodando a aplicação frontend (Vite)
Em um terminal:

```bash
npm run dev
```

🖥️ Rodando o backend mock (caso utilize o servidor Express)
Em outro terminal:

```bash
node server.js
O backend será acessado por http://localhost:5000/api/dashboard
```

👨‍💻 Autor
Desenvolvido com 💻 por Frank
