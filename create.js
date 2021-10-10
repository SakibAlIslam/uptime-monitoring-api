//dependencies
const http = require('http');

// app object - module scaffolding
const app = {}

//configuration
app.config = {
    port: 5500
}

//create server
app.createServer = () => {
    const server = http.createServer((req,res)=>{
        res.end('Hello Sakib')
    })
    server.listen(app.config.port, ()=>{
        console.log(`listening on port: ${app.config.port}`)
    })
}

app.createServer()