const http = require('http');

const data = [
    {
        name: 'Abutalha',
        age:69,
        email:'abutalhaa844@gmail.com'
    },
    {
        name: 'Ahmad',
        age:70,
        email:'ahmad@gmail.com'
    },
    {
        name: 'raja',
        age:71,
        email:'raia@gmail.com'
    }
]

http.createServer((req,resp)=>{
    resp.setHeader('Content-Type', 'application/json')
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(7000)