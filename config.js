module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 4000,
    URL: process.env.BASE_URL || 'http://localhost:4000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://adamwjo:A3trumpet@mongo-rest-practice-shard-00-00-lhgh5.mongodb.net:27017,mongo-rest-practice-shard-00-01-lhgh5.mongodb.net:27017,mongo-rest-practice-shard-00-02-lhgh5.mongodb.net:27017/test?ssl=true&replicaSet=mongo-rest-practice-shard-0&authSource=admin&retryWrites=true'
}