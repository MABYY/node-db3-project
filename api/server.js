const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.get('/', (req,res) => {
    res.status(200).send(`<h1>Node db3 Project</h1>`)
})

server.get('*', (req,res) => {
    res.status(500).json({
        message:"Incorrect path"
    })
})

module.exports = server;