const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');

const products = require('./api/routes /products.js');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = config.MONGODB_URI;

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/products', products);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



app.listen(config.PORT, () => console.log(`Server started on port ${config.PORT}`));