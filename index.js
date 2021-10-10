const http = require('http');
const url = require('url');

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
    //request handling
    // get the url and parse it 
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const quearyStringObject = parsedUrl.query

    console.log(quearyString)
    //response handle
    res.end('hello sakib')
}

//start server
app.createServer()