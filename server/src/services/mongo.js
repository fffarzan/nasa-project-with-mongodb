const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready!');
});
  
mongoose.connection.on('error', (error) => {
    console.error(error);
});

async function connectMongo () {
    await mongoose.connect(process.env.MONGO_URL);
}

async function disconnectMongo () {
    await mongoose.disconnect();
}

module.exports = {
    connectMongo,
    disconnectMongo,
}