// const http = require('http')
import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  // const method = req.method
  // const url = req.url
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const user = {
      id: 1,
      name: 'Pedro',
      email: 'pedro@email.com'
    }
    users.push(user)

    return res.writeHead(201).end(user)
  }

  return res.writeHead(404).end()
})

server.listen(3333)