const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; 
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'mike@example.com',
    //     text: 'Hey. What is going on.',
    //     createdAt: 123
    // });

    socket.emit('newMessage', {
        from: 'Jen',
        text: 'This is the second message I am sending',
        createdAt: 1234
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('createMessage', (createMessage) => {
        console.log('createMessage', createMessage);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
