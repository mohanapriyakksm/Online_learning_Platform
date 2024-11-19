const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

const connectDB = async () => {
  console.log('MONGO_URI:', process.env.MONGO_URI); // Debug log

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Could not connect to MongoDB: ${err}`);
    throw new Error(`Could not connect to MongoDB: ${err}`);
  }
};

module.exports = connectDB;
