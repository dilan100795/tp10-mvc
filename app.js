const express = require('express');
const livereload = require('livereload');
const path = require('path');

const connect = require('connect-livereload');
const liveReloadServer = livereload.createServer();
const app = express();
const port = 3000;

const mainRouter = require('./routers/main');

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connect());

app.use('/', mainRouter);

liveReloadServer.server.once('connection', () => { 
    setTimeout(() => {
        liveReloadServer.refresh('/')
    }), 100
});

app.listen( port, () => console.log(`Servidor levantado con éxito en http://localhost:${port}`));