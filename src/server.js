// const http = require('http')
import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  // const method = req.method
  // const url = req.url
  const { method, url } = req

  console.log(req.headers);

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Pedro',
      email: 'pedro@gmail.com'
    })

    res.end('Criação de usuario')
  }

})

server.listen(3333)