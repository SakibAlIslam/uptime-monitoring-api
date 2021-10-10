const http = require('http');

// app object - module scaffolding
const app = {};

//configuration
app.config = {
    port: 5000,
};

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`listening to port ${app.config.port}`);
    })
}

//handle request response
app.handleReqRes = (req, res) => {
    res.end('hello world')
}

//start server
app.createServer()