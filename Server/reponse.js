const http = require('http');
let age = 69;
const server = http.createServer((req, resp) => {
   // resp.setHeader('Content-Type','text/json')
   resp.setHeader('Content-Type', 'text/html')
   resp.write(`
      
<html>
<head>
    <title>Response server page</title>
</head>
<body>
    <h1>hi this is talha </h1>
    <p>my age is `+age+`</p>
    <p> `+new Date+`</p>
    
</body>
</html>
      `);
      resp.end('end ')
})

server.listen(1234)