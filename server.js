const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My first page</title></head>')
  res.write('<body>Hello World!</body>')
  res.write('</html>')
  res.end()
})

server.listen(3000)
