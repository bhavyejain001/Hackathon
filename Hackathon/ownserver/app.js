// const http  = require('http');
const dotenv = require('dotenv');
const chalk = require('chalk');
dotenv.config();
// Created Server Using Http 

// const server = http.createServer();
// server.listen(process.env.PORT || 1234,(err)=>{
//     if(err){
//         console.log(chalk.red.bold('Unable to start the server'),chalk.red(err));
//     }
//     else{
//         console.log(chalk.green.italic('Server Started '),chalk.yellow(server.address().port));
//     }
// })


// Created Server Using Express
const express = require('express');
const app = express();
const uuidV4 = require('uuid/v4');
   

app.use((req, res, next) => {
    req.reqId = uuidV4();
    next();
});

app.get('/', function (req, res) {  
  res.send(`Hello World! with reqId: ${req.reqId}`);
});

const server = app.listen(process.env.PORT || 1234,(err)=>{
        if(err){
            console.log(chalk.red.bold('Unable to start the server'),chalk.red(err));
        }
        else{
            console.log(chalk.green.italic('Server Started '),chalk.yellow(server.address().port));
        }
});