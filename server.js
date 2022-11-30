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

// default endpoint
app.post('/app/roll', (req, res) => {
  res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
});

app.get('/app/roll', (req, res) => {
  res.send(roll(6, 2, 1));
});

// endpoint for sides
app.get('/app/roll/:sides/', (req, res) => {
  res.send(roll(parseInt(req.body.sides),2, 1));
});

// endpoint for sides and dice
app.get('/app/roll/:sides/:dice/', (req, res) => {
  res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), 1));
});

// endpoint for sides, dice, and rolls
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
  res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
});

// endpoint for 404 error
app.get('/app/*', (req, res) => {
  res.send("404 NOT FOUND");
});

// start her up
app.listen(port, () => {
  console.log('Server port ${port}\n');
});
