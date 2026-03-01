const http = require('http');
const fs = require("fs")

http.createServer((req, resp) => {

    // ==================
    // Header data
    let collectHeaderData = fs.readFileSync("html/header.html", 'utf-8')
    // ==================

    // ===========
    // Routing for pages 
    let file = "/home.html";
    if(req.url=="/"){
        file="/home.html"; // ❌ Original set file = "/" which caused wrong path
    } else {
        file = req.url + ".html"; // ✅ Add .html for other pages
    }

    if (req.url != "/style.css") {
        fs.readFile("html"+file, 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" })
                resp.end("internal server error")
                return false
            }
            // ✅ Send header + page content
            resp.writeHead(200, { "content-type": "text/html" }) 
            resp.end(collectHeaderData + "" + data)
        })
    } else if (req.url == "/style.css") {
       
        fs.readFile("html/style.css", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" })
                resp.end("css not found")
                return false
            }
            // ✅ Serve CSS with correct content-type
            resp.writeHead(200,{"content-type": "text/css" })
            resp.end(data)
        })
    }

}).listen(3200)