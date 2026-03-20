
## ChatIOtalk (Node.js + socketsIO)

from book node aplication by: caio ribeiro pereira 

## 🏛️Os requisitos do projeto são:

- [ ] O usuário deve criar, editar ou excluir um contato;
- [ ] O usuário deve se logar informando seu nome e e-mail;
- [ ] O usuário deve conectar ou desconectar no chat;
- [ ] O usuário deve enviar e receber mensagens no chat somente entre os contatos online;

## 🛠️ Tecnologias:

- [ ] Node.js: Backend do projeto;
- [ ] MongoDB: Banco de dados NoSQL orientado a documentos;
- [ ] Redis: Banco de dados NoSQL para estruturas de chave-valor;
- [ ] Express: Framework para aplicações web;
- [ ] Socket.IO: Módulo para comunicação real-time;
- [ ] MongooseJS: ODM (Object Data Mapper) MongoDB para Node.js;
- [ ] Node Redis: Cliente Redis para Node.js;
- [ ] EJS: Template engine para implementação de html dinâmico;
- [ ] Mocha: Framework para testes automatizados;
- [ ] SuperTest: Módulo para emular requisições que será utilizado no teste de integração;
- [ ] Nginx: Servidor Web de alta performance para arquivos estáticos;

## Como Rodar sistema

```js
$  clone repositorio
git clone https://github.com/Guilhermefonseca2021/ChatIOTalk.git
$  entre na pasta
cd ChatIOtalk
$  instale as dependencias
npm install
$  rode o servidor localmente
npm run dev
```

<a href="https://chat-io-talk.vercel.app/">Clique aqui para ver ambiente online </a>

## Por que de cada tecnoliga:

O Socket.IO escolhe automaticamente a melhor forma de comunicação entre cliente e servidor (WebSocket, polling, etc.) conforme o navegador.
Se houver suporte a WebSockets/Flash, usa comunicação bidirecional em tempo real; caso contrário, simula via requisições AJAX.
Isso garante compatibilidade com navegadores antigos, abstraindo toda a complexidade para o desenvolvedor.