const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors')
let cors_whitelist = ['http://localhost:3000','http://localhost:8080','http://localhost:8081']
app.use(cors({origin: cors_whitelist}))

// routes and endpoints here

server.listen(3000, () => {
    console.log('listening on port: ', 3000);
});