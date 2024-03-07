# RS-Node-1-Fundamentos: Projeto Fundamentos Node.js

🚀🟢 1- Primeiro Projeto da Formação de NodeJs na Rocketseat. Inteiramente feito com NodeJS puro.

### Duração e quantidade de aulas:
3 horas, 6 minutos e 43 segundos distribuídos em 25 aulas.

### Descrição do Projeto
Nesse primeiro módulo iremos desenvolver uma API REST com Node.js focada nos fundamentos da tecnologia, sem frameworks ou bibliotecas externas. Aprenderemos sobre módulos internos do Node.js como HTTP, Crypto e File System e sobre fundamentos HTTP como requests, responses, headers, status code, route e query parameters, etc. Também daremos profundidade em Streams no Node.js e como aplicá-las para realizarmos operações assíncronas e parciais em nosso back-end.

## Aula 1- Inicializando o projeto 

### Padrões de Importação

O JavaScript tem dois padrões de importação, o primeiro deles é:]

- CommunJS:
```js
const http = require('http')
```

- ESModule:
```js
const http = require('http')
```

Por padrão, vem setado o CommunJS. Mas atualmente, o padrão mais utilizado é o ESModule

 - Então, deve-se modificar o arquivo: `package.json` para settar o ESModule como padrão

 ```json
  'type': "ESModule"
```
Ao adicionar essa linha, o ESModule fica setado.

### Importante modulos padrões do Node
Para importar modulos padrões do node, como o `http` comumente é usado `node:` antes do modulo.

- Exemplo:
```js 
import http from 'node:http'
```
** só uma dica, o nome depois do import pode ser o que você quiser se for o padrão.

## Aula 2- Baixando Node Watch

Criamos o nosso servidor node, mas ele não atualiza automaticamente quando há alguma mudança. 

- Para melhorar isso, vamos fazer o node "assistir" o nosso server

Então, ao invez de rodar o servidor com `node src/server.js` usamos o watch: 
```cmd
node --watch src/server.js
```

- Mas, para não ter que rodar esse mesmo comando sempre, vamos criar um comando no `package.json`:
```json
"scripts": {
  "dev": "node --watch src/server.js"
}
```
Agora, toda vez que quisermos usar o nosso script, rodamos `npm run dev` no terminal

## Aula 3- Criação de Rotas

### Entendendo o que são as Rotas

Rotas são os endpoints que a nossa aplicação backend pode ter, com diferentes funcionalidades para X assuntos.

Então, usando o exemplo da entidade Usuario, podemos ter rotas para:

- Criar Usuarios
- Listar de Usuarios
- Editar Usuarios
- Remover Usuarios

### Requisições HTTP

Requisições HTTP, dentre tantas coisas, tem duas caracteristicas

#### Metodos HTTP

O Metodo de uma requisição HTTP é tudo que vem antes do servidor `METODO http://localhost/url`

Vamos falar melhor agora sobre cada metodo HTTP:

- GET => Buscar um recurso do backend
- POST => Criar um recurso no backend
- PUT => Atualizar um recurso completo no backend
- PATCH => Atualizar uma informação especifica de um recurso backend
- DELETE => Deletar um recurso do backend  

#### URL 
A URL de uma requisição HTTP é tudo o que vem depois do servidor `localhost:3333/url`

Eu posso ter duas rotas no meu backend, com a mesma URL, mas com funções diferentes. O que as diferencia é o metodo que elas utilizam.

Exemplos:
- `GET /users` => Buscando usuarios no Backend
- `POST /users` ==> Criando usuario no Backend
- `PUT /users` => Atulizando usuario ao todo no Backend
- `PATCH /users` => Atualizando dado especifico de usuario no Backend
- `DELETE /users` => Deletando usuario do Backend