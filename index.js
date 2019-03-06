const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config');
const path = require('path')

const server = restify.createServer();

// Middleware
server.use(restify.plugins.bodyParser());

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  server.use(restify.plugins.serveStatic('client/build'));

  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



server.listen(config.PORT, () => {
    mongoose.set('useFindAndModify', false);
    mongoose.connect(
        config.MONGODB_URI, {
            useNewUrlParser: true
        }
    );
});

const db = mongoose.connection;

db.on('error', err => console.log(err));

db.once('open', () => {
    require('./api/routes /products.js')(server);
    console.log(`Server started on port ${config.PORT}`);
});