const http = require('http')
const server = http.createServer()
const port = 3000
server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  if (req.method === 'GET' && req.url === '/books') {
    res.end(`The request method for API endpoint: ${req.url} is ${req.method} `)
  }
  if (req.method === 'PUT' && req.url === '/books') {
    res.end(`The request method for API endpoint: ${req.url} is ${req.method} `)
  }
  if (req.method === 'DELETE' && req.url === '/books') {
    res.end(`The request method for API endpoint: ${req.url} is ${req.method} `)
  }
  if (req.method === 'GET' && req.url === '/books/author/') {
    res.end(`The request method for API endpoint: ${req.url} is ${req.method} `)
  }
  if (req.method === 'POST' && req.url === '/books/author/') {
    res.end(`The request method for API endpoint: ${req.url} is ${req.method} `)
  }
  if (req.method === 'PUT' && req.url === '/books/author/') {
    res.end(`The request method for API endpoint: ${req.url} is ${req.method} `)
  }
  else {
    // res.writeHead(404)
    res.end(`${req.url} is an invalid route or ${req.method} is an invalid request`)
  }
})
server.listen(port, () => console.log(`Server started on port: ${port}`))
