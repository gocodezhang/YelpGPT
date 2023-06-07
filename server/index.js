const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const controller = require('./controller/index');

const app = express();

// Basic Set up
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes
app.get('/chats', controller.responseAndRestaurant);

// Server listen
app.listen(3000);
console.log('Listening at http://localhost:3000');
