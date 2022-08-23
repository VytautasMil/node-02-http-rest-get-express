'use strict';
console.log('server.js');

// importuojam express
const express = require('express');
// sukuriam back end aplikacija/serveri
const app = express();
const PORT = 3000;

// Routes

// app[method]([endpiont/url], functionToHandle)
app.get('/', (request, response) => {
  response.send('<h1>Hello express framework</h1>');
});

app.get('/time', (request, response) => {
  response.status(200).send(`<h1>${new Date().toLocaleTimeString()}</h1>`);
});

// about
app.get('/about', (request, response) => {
  response.send('<h1>about page</h1>');
});

// GET /api/users
const users = [
  {
    id: 1,
    name: 'James',
    town: 'London',
  },
  {
    id: 2,
    name: 'Jill',
    town: 'Kaunas',
  },
];

// 404 page
app.use((req, res, next) => {
  res.status(404).json({ msg: "Sorry can't find that!" });
});
// paleidiziam serveri
app.listen(PORT, () => console.log('server is running on port ' + PORT));