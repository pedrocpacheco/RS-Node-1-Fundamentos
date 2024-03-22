// const http = require('http')
import http from 'node:http'

import { json } from './middlewares/json.js'
import { routes } from './routes.js'

const server = http.createServer(async (req, res) => {
  // const method = req.method
  // const url = req.url
  const { method, url } = req
  // interceptador(sempre recebem: req, res)
  await json(req, res) // ? cria o req.body

  const route = routes.find(route => { return route.method === method && route.path === url })
  if (route)
    return route.handler(req, res)

  return res.writeHead(404).end()
})

server.listen(3333)