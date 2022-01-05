# CINEONE-BACKEND

API para ser consumida pelo front-end do CineOne.
 
 
 ## Informações gerais
Foi construpida utilizando a framework Express e  Node.js.

## Other libraries
##### Nodemon - roda o servidor automaticamente
##### Supertest - realiza testes de rotas

## Banco de dados
SQLite3

# Rodando o servidor

Clone o projeto no terminal
```bash
git clone https://github.com/thaissilvr/CINEONE-BACKEND.git
```
Acesse o diretório do projeto
```bash
cd cineone-backend
```
Instale as dependências
```bash
npm install
```
Rode o servidor
```bash
npm run dev
```

## Estrutura da API
API REST, utilizando somente os verbos HTTP Get e Post.
~~~
GET: /room
GET: /room/:id
GET: /movie
GET: /movie/:id
POST: /room
POST: /movie
~~~

## Testando a API
```bash
npm run test
````
