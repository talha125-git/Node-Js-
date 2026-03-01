const http = require('http')
http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": 'text/html' })

    if (req.url == "/") {
        resp.write(`
        <form action="/submit" method="post">
        <input type="text" placeholder="enter name ">
        <input type="email">
        <button>submit</button>
    </form>
        `)
    }
    else if (req.url == "/submit") {
        resp.write(`
            <h1>Form submitted</h1>
            `)
    }
    resp.end()
}).listen(8000)