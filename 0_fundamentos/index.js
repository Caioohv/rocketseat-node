//common js
//const http = require('http')

import http from 'node:http'

//HTTP
// - Metodo -> GET, POST, PUT (alterar tudo), DELETE, PATCH (alterar parte)
// - URL
//

// STATEFUL X STATELESS

const server = http.createServer((req, res) => {
  const { url, method } = req

  console.log(`URL: ${url} - METHOD: ${method}`)
  if(url === '/users' && method === 'GET') {
    return res.end('Listar Usuarios')
  }

  if(url === '/users' && method === 'POST') {

    return res.end('Criar usuario')
  }

  return res.end(`hello world!`)
})

server.listen(3000)

