<div align="center">
  <img src="./public/atlasx-logo.png" alt="Ícone do AtlasX" width="96">
  <h1>AtlasX</h1>
  <p><strong>Explore. Descubra. Conheça o mundo.</strong></p>
  <p>Desafio 02 · Painel Interativo com API Pública · KodieAcademy</p>
</div>

---

## Neste README

- [Sobre o projeto](#sobre-o-projeto)
- [O que você pode fazer](#o-que-você-pode-fazer)
- [Tecnologias](#tecnologias)
- [API](#api)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Decisões de desenvolvimento](#decisões-de-desenvolvimento)
- [Uso de inteligência artificial](#uso-de-inteligência-artificial)
- [Entrega do desafio](#entrega-do-desafio)

## Sobre o projeto

O AtlasX é um jeito simples e visual de explorar informações sobre países. Em vez de consultar os dados diretamente na API, a pessoa pode pesquisar, filtrar por região e abrir uma ficha com mais detalhes — tudo em uma interface que se adapta a diferentes telas.

O projeto foi desenvolvido para o **Desafio 02 da KodieAcademy**, com foco em praticar React, consumo de API, organização de componentes e construção de uma aplicação responsiva.

## O que você pode fazer

- **Pesquisar países** pelo nome;
- **Filtrar por região:** África, Américas, Ásia, Europa e Oceania;
- **Navegar pelos resultados** usando a paginação;
- **Abrir os detalhes** de um país e fechar a visualização quando terminar;
- **Explorar em diferentes dispositivos**, de celulares a computadores.

A ficha de cada país reúne, conforme os dados disponíveis, informações como:

- Bandeira e nome oficial;
- Capital, região, sub-região e continente;
- População e área;
- Idiomas e moedas;
- Fuso horário e código do país.

## Tecnologias

| Ferramenta | Uso no projeto |
| --- | --- |
| React | Construção da interface e dos componentes |
| Vite | Ambiente de desenvolvimento e build |
| JavaScript | Lógica da aplicação |
| CSS3 | Estilos e adaptação para diferentes telas |
| REST Countries API | Dados sobre os países |
| Git e GitHub | Versionamento do código |
| Vercel | Publicação da aplicação |

## API

O AtlasX consulta a [REST Countries API](https://restcountries.com/) para obter os dados exibidos nos cards e na visualização de detalhes. A busca e o filtro por região ajudam a encontrar os países; a paginação organiza os resultados em partes menores.

Quando alguém abre os detalhes de um país, a aplicação reaproveita os dados que já recebeu. Assim, não é preciso fazer outra requisição apenas para exibir essa ficha.

## Estrutura do projeto

Os componentes foram divididos de acordo com as partes da interface. Essa organização deixa mais claro o papel de cada arquivo e facilita a manutenção do código.

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
├── services/
│   └── countriesApi.js
├── App.jsx
├── main.jsx
└── index.css
```

## Decisões de desenvolvimento

A busca, o filtro e a paginação trabalham juntos para ajudar na exploração dos países sem deixar a tela carregada de resultados. Já a ficha de detalhes usa informações que a aplicação recebeu anteriormente, evitando uma chamada extra à API para cada país selecionado.

Para o layout se ajustar a diferentes tamanhos de tela, foram usados **Flexbox**, **CSS Grid** e *media queries*.

## Uso de inteligência artificial

Durante o desenvolvimento, ferramentas de inteligência artificial foram usadas como apoio para estudar a API e pensar em soluções para algumas partes da aplicação. Abaixo estão os prompts registrados e o objetivo de cada um.

### Consulta à API

> Estou criando uma aplicação React que consome uma API pública de países. Quero entender como fazer as requisições e quais dados da API posso utilizar na minha aplicação.

**Objetivo:** entender como consultar a API e aproveitar os dados retornados no projeto.

### Busca e filtros

> Quero criar uma ferramenta de busca de países em React. O usuário deve pesquisar e também poder filtrar por região, fazendo o mínimo possível de requisições à API.

**Objetivo:** explorar a lógica de busca, os filtros e as consultas necessárias.

### Paginação

> Minha API retorna muitos países. Quero mostrar apenas 12 por página e criar uma paginação usando limit e offset, evitando carregar todos os países de uma vez.

**Objetivo:** implementar a navegação por páginas e limitar a quantidade de dados carregados em cada consulta.

### Visualização de detalhes

> Quero que o botão “Ver detalhes” mostre mais informações do país, como população, idioma, moeda, capital e área, sem fazer uma nova requisição à API.

**Objetivo:** reutilizar os dados já carregados ao exibir as informações de um país.

### CSS e responsividade

> Quero melhorar o CSS da minha aplicação React, deixando a interface moderna, organizada e responsiva para desktop, tablet e celular. Preciso estilizar os cards, busca, filtros, paginação e detalhes dos países.

**Objetivo:** organizar os estilos e adaptar a interface a diferentes tamanhos de tela.

## Entrega do desafio

O AtlasX reúne os principais pontos propostos no desafio:

- Aplicação desenvolvida com React e Vite;
- Integração com uma API pública;
- Componentes separados por responsabilidade;
- Busca, filtro por região e paginação;
- Visualização detalhada dos países;
- Interface responsiva;
- Código versionado no GitHub e aplicação publicada;
- Documentação do projeto e registro do uso de IA.

---

<div align="center">
  <strong>AtlasX</strong><br>
  Feito para o Desafio 02 da KodieAcademy · 2026
</div>
