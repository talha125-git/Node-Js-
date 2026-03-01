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

    } 
    else if (req.url === '/submit' && req.method === 'POST') {

        let databody = [];
        req.on('data', (chunk) => databody.push(chunk));

        req.on('end', () => {
            let rawData = Buffer.concat(databody).toString();
            let formData = querystring.parse(rawData);

            let dataString = `My name is ${formData.username} & my email is ${formData.email}`;
            console.log(dataString);

            // Save file
            let filename = `${formData.username}.txt`;
            // sync method
            // fs.writeFileSync(filename, dataString);
            // console.log("File created:", filename);

            // asyc  method 
            fs.writeFile(filename, dataString,'utf-8', (err) => {
                if (err) {
                    resp.end("internalll server error");
                    return false;
                }
                else{
                  console.log("File created:", filename);   
                }
            })

            resp.writeHead(200, { "content-type": "text/html" });
            resp.end("<h1>Data received and file created!</h1>");
        });

    } 
    else {
        resp.writeHead(404, { "content-type": "text/plain" });
        resp.end("404 Not Found");
    }

}).listen(2200);

console.log("Server running on http://localhost:2200");
