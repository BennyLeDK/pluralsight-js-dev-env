var express = require('express');
var path = require('path');
var open = require('open');

const port = 3000;
const app = express();

// import express from 'express';
// import path from 'path';
// import open from 'open';

// const port = 3000;
// const app = express();

app.get('/', function(req, res){
  res.sendfile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  }else {
    open('http://localhost:' + port);
  }
});