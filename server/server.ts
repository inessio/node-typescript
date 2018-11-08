
import express from 'express'
import bodyParser from 'body-parser'
import * as HomeController from './controllers/home'

const server = express()
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.get('/', HomeController.index);
server.get('/users', HomeController.users);
server.post('/users/create', HomeController.create);

const PORT = 3000;
server.listen(PORT, function () {
    console.log('Example app listening on port 3000!')
});