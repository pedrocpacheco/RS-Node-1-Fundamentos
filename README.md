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

## Aula 1.1- Criação de Rotas

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

## Aula 1.2- Salvando em memoria

Agora na nossa aplicação, vamos começar a salvar dados de forma Statefull

### O que é Stateful e VS Stateless

A Statefull, depende das informações salvas em memoria para funcionar.

- Os dados são perdidos ao reiniciar

Já uma Stateless, não depende da memoria. Ela salva informações fora, em BDs, etc.

- Os dados não são perdios ao iniciar

### Começando pelas Statefull

Vamos criar um array para salvar os nossos usuarios

`users = []`

### 1. Adicionando Usuario na Memoria
Agora, vou fazer para que quando uma Requisição POST seja feita, um usuario novo seja salvo.

```js
ìf (method === 'POST' && url === '/users') {
  users.push({
    id: 1,
    name: 'Pedro',
    email: 'pedro@gmail.com'
  })

  return res.end('Criação de Usuario')
}
```

### 2. Listando Usuarios na memoria
Agora, dese-jo mostrar essa lista em memoria com um usuario adicionado, como reposta de uma requisição GET.

#### 1.0 Retornando a Lista
```js
if (method === 'GET' && url === '/users') {
  return res.end(users)
}
```
⚠️ Ao realizar a requisição, um erro vai acontecer. Pois a resposta do backend precisa ser ou `string` ou `buffer`

#### 2.0 Para passar por esse problema usamos o JSON. 

Chamado de JavaScript Object Notation, ele é uma maneira de passar tipos de dados diferentes em uma `string`

```js
if (method === 'POST' && url === '/users') {
  return res.end(JSON.stringfy(users))
}
```

E, ao então fazer uma requisição `GET` no servidor, temos:
`[{"id": 1, "nome": "Pedro", email: "pedro@gmail.com"}]`

Mas ainda da pra melhorar!

#### 3.0 Como definir a resposta como JSON
Como então podemos falar para o Frontend que o Backend esta devolvendo um JSON?

Para isso existem os `headers`!


### Headers
Cabeçalhos são metadados, para que tanto o Back quanto o Front saibam lidar com X requisição de determinada forma.

Ele basicamente diz, como o dado retornado deve ser interpretado, mas não o modifica.

Vamos definir a nossa resposta do servidor na requisição do metodo `GET` e url `/users` como `JSON`

Para isso, precisamos adicionar o header `Content-Type` com o valor `application/json`

#### Código Atualizado
```js
if(method === 'GET' && url === '/users'){
  return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringfy(users))
}
```
#### Resposta da requisição
```json
[
  {
    "id": 1,
    "name": "Pedro",
    "email": "pedro@gmail.com"
  }
]
```

✅ Podemos ter headers sendo enviados do backend ao -> frontend, como vimos em `res.setHeader`

✅ Ou também do frontend ao -> backend, como em `header = req.headers`

## Aula 1.3- HTTP Status Code

Os HTTP Status code são formas de dizer qual foi o resultado da requisição requerida.

Definindo o metodo certo para a criação de um novo recurso. 

```js
res.statusCode(201).end()
```

Caso a requisição não entre em nenhum de nossos if's, vamos dizer que ela foi uma má requisição

```js
res.writeHead(404).end()
```

### Aula 2.1 - O que são Streams?

Streams nada mais são, do que maneiras de fazer uma ação grande, que demandaria muito tempo paraser executada, de pouquinho em poquinho.

- Eu leio um upload aos poucos. Processando os seus dados, enquanto ele ainda é enviado.

#### Readable Streams
Cliente enviando aos poucos uma informação pro Servidor
- Exemplo de usuario enviando um arquivo CSV de 1gb, o servidor lê e ja processa ele em 10mb/s 

#### Writable Streams
Servidor aos poucos uma informação ao Cliente
- Exemplo de um vídeo da netflix. O servidor envia ele aos poucos ao cliente assistindo