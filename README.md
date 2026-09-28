<div align="center">

<img src="./public/atlasx-logo.png" alt="AtlasX" width="90">

<h1>Atlas<span>X</span></h1>

<p>
  <strong>Explore. Descubra. Conheça o mundo.</strong>
</p>

</div>

---

## 📌 Sobre o projeto

<p align="justify">
O <strong>AtlasX</strong> é uma aplicação web interativa desenvolvida para facilitar a consulta e a exploração de informações sobre diferentes países do mundo.
</p>

<p align="justify">
A aplicação utiliza uma <strong>API pública de países</strong> para transformar dados em uma experiência visual, organizada e simples de utilizar. O usuário pode pesquisar países, filtrar resultados por região, navegar entre diferentes páginas e visualizar informações detalhadas sobre cada país.
</p>

<p align="justify">
O projeto foi desenvolvido como parte do desafio <strong>Painel Interativo com API Pública</strong>, tendo como objetivo colocar em prática conhecimentos de React, consumo de APIs, componentização, responsividade, organização de interfaces e publicação de aplicações web.
</p>

---

## 💡 Problemática

<p align="justify">
Atualmente, muitas informações estão disponíveis por meio de APIs públicas, porém o acesso aos dados por si só não garante uma experiência simples para o usuário.
</p>

<p align="justify">
A proposta do AtlasX é transformar dados disponibilizados por uma API pública em uma aplicação visual e interativa, permitindo que o usuário consulte informações sobre países de maneira mais organizada e acessível.
</p>

---

## 🎯 Objetivo

<p align="justify">
Desenvolver uma aplicação React funcional, responsiva e publicada, capaz de consumir uma API pública e apresentar informações sobre países de maneira clara e interativa.
</p>

A aplicação foi desenvolvida para demonstrar:

- Consumo de uma API pública;
- Manipulação dos dados recebidos;
- Componentização em React;
- Busca de informações;
- Filtro por região;
- Paginação dos resultados;
- Visualização detalhada dos países;
- Interface responsiva;
- Organização visual;
- Publicação da aplicação;
- Documentação do projeto.

---

## 🌎 Funcionalidades

### 🔎 Busca por país

<p align="justify">
O usuário pode pesquisar um país utilizando o campo de busca. A pesquisa é enviada para a API e os resultados são apresentados de forma paginada.
</p>

### 🌍 Filtro por região

<p align="justify">
É possível filtrar os países por região, como África, Américas, Ásia, Europa e Oceania.
</p>

### 📄 Paginação

<p align="justify">
Os resultados são apresentados em páginas com quantidade limitada de países, evitando o carregamento de todos os dados de uma única vez.
</p>

### 📋 Detalhes do país

<p align="justify">
Ao selecionar um país, o usuário pode abrir uma visualização detalhada com informações adicionais disponíveis nos dados recebidos pela API.
</p>

Entre as informações apresentadas estão:

- Capital;
- Região;
- Sub-região;
- População;
- Idioma(s);
- Moeda(s);
- Área;
- Fuso horário;
- Continente;
- Código do país;
- Bandeira;
- Nome oficial.

### 📱 Responsividade

<p align="justify">
A interface foi desenvolvida para funcionar em diferentes tamanhos de tela, incluindo celular, tablet e desktop.
</p>

---

## 💻 Tecnologias

- **React**
- **Vite**
- **JavaScript**
- **CSS3**
- **REST API**
- **Git**
- **GitHub**
- **Vercel**

---

## 🔌 API utilizada

<p align="justify">
O AtlasX utiliza a <strong>REST Countries API</strong> para obter os dados dos países apresentados na aplicação.
</p>

<strong>API:</strong> [REST Countries](https://restcountries.com/)

<p align="justify">
Os dados recebidos pela API são utilizados para montar os cards, realizar as pesquisas, aplicar os filtros e apresentar as informações detalhadas de cada país.
</p>

<p align="justify">
Para evitar o carregamento desnecessário de grandes quantidades de dados, a aplicação utiliza paginação e solicita uma quantidade limitada de países por vez.
</p>

---

## 🧩 Componentização

<p align="justify">
A aplicação foi organizada em componentes React com responsabilidades específicas, facilitando a manutenção e organização do código.
</p>

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Explorer.jsx
│   ├── SearchBar.jsx
│   ├── RegionFilter.jsx
│   ├── CountryGrid.jsx
│   ├── CountryCard.jsx
│   ├── CountryDetails.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── services/
│   └── countriesApi.js
│
├── App.jsx
├── main.jsx
└── index.css