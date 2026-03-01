const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, resp) => {

    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('form.html', 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("Internal Server Error");
                return;
            }
            resp.writeHead(200, { "content-type": "text/html" });
            resp.end(data);
        });

    } else if (req.url === '/submit' && req.method === 'POST') {

        let databody = [];
        req.on('data', chunk => {
            databody.push(chunk);
        });

        req.on('end', () => {
            let rawData = Buffer.concat(databody).toString();
            let formData = querystring.parse(rawData);

            console.log(formData);

            resp.writeHead(200, { "content-type": "text/html" });
            resp.end(`
                <h1>Data Submitted</h1>
                <p><strong>Name:</strong> ${formData.username}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <a href="/">Go Back</a>
            `);
        });

    } else {
        resp.writeHead(404, { "content-type": "text/plain" });
        resp.end("404 Not Found");
    }

}).listen(3200)
