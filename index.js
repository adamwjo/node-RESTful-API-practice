const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config.js');

const server = restify.createServer();

//middleware
server.use(restify.plugins.bodyParser)


//server connect
server.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true})
})

const db = mongoose.connection;

db.on('error', error => console.log(error));

db.once('open', () => {
    require('./api/routes /products.js')(server);
    console.log(`server started on port ${config.PORT}`)
})