// const http = require('http')
import http from 'node:http'

const server = http.createServer((req, res) => {
  // const method = req.method
  // const url = req.url
  const { method, url } = req

  if (method === 'GET' && url === '/users')
    res.end('Listagem de Usuarios')

  if (method === 'POST' && url === '/users')
    res.end('Criação de usuario')

  if (method === 'PUT' && url === '/users')
    res.end('Atualização geral de Usuario')

  if (method === 'PATCH' && url === '/users')
    res.end('Atualização especifica de Usuario')

  if (method === 'DELETE' && url === '/users')
    res.end('Remoção de Usuario')

})

server.listen(3333)