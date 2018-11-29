const path = require('path');
const http = require('http');
const express = require('express');
const sockerIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
var io = sockerIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
    console.log('new user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



console.log(publicPath);

server.listen(port,() => {
    console.log(`server is up on port ${port}`);
});