# 🐾 Pet API - Gerenciamento de Pets

Uma API REST completa para gerenciamento de pets, desenvolvida como parte de um desafio técnico da **GROWDEV** para a formação de Desenvolvimento VTEX IO da **VESTETECH**. A aplicação permite o cadastro, consulta, atualização e exclusão de pets, utilizando persistência em memória e seguindo as melhores práticas de desenvolvimento Node.js.

---

## Tecnologias Utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![UUID](https://img.shields.io/badge/UUID-31A8FF?style=for-the-badge&logo=id&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%2376d04b.svg?style=for-the-badge&logo=nodemon&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23f7df1e)

---

## Funcionalidades (CRUD)

- `GET /pets`: Lista todos os pets cadastrados.
- `GET /pets/:id`: Busca um pet específico através do seu ID.
- `POST /pets`: Cadastra um novo pet (Validação inclusa).
- `PUT /pets/:id`: Atualiza as informações de um pet existente.
- `DELETE /pets/:id`: Remove um pet do sistema.

---

## 📖 Documentação da API

A documentação detalhada, gerada e publicada através do **POSTMAN**, contendo exemplos de requisições e respostas pode ser acessada no link abaixo:

> 🔗 **[CLIQUE AQUI PARA ACESSAR A DOCUMENTAÇÃO (POSTMAN)](https://documenter.getpostman.com/view/21934218/2sBXVo7mvu)**

---

## 🛡️ Validações e Segurança

- **Middleware de Validação:** Garante que todos os campos obrigatórios (`nome`, `raca`, `idade`, `nomeTutor`) sejam enviados corretamente no corpo da requisição.
- **Tratamento de Erros:** Implementação de blocos `try/catch` em todas as rotas e middlewares para garantir a estabilidade do servidor.
- **ID Único:** Uso de UUID v4 para evitar conflitos de identificadores.

---

## 📦 Deploy

O projeto está configurado para deploy automático na plataforma ![Render](https://img.shields.io/badge/Render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

> 🔗 **API em Produção:** [https://api-pets-growdev-vestetech.onrender.com/](https://api-pets-growdev-vestetech.onrender.com/)
