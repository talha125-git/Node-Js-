const http = require('http');
http.createServer( (req, resp)=> {
    resp.write('<h1> hello this server has been made by me</h1> <p> NOW I AM changing in this server by not run time to time by using nodemon  </p> ')
resp.end('hello motherFucker')
}

).listen(6969); 



// now we instal nodemon for not to run this file everytime while chnage 