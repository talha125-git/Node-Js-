const http = require("http");
const UserForm = require("./UserForm");
const UserDateSubmit = require("./UserDateSubmit")

http.createServer((req, resp) => {

    resp.writeHead(200,{"content-type":'text/html'})
    if(req.url=="/"){
        UserForm(req, resp);
    }
    else if(req.url=="/submit")(
        UserDateSubmit(req,resp)
    )

    
    resp.end();
}).listen(2000);