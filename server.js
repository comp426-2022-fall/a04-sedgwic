#!/usr/bin/env node

// import roll
import {roll} from "./lib/roll.js";

// import express
import express from 'express';
const app = express();

// import minimist 
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

// port 
const port = args.port || 5000;

app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
  res.send("200 OK");
});

app.get('/app/*', (req, res) => {
  res.send("404 NOT FOUND");
});

app.listen(port);
