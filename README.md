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