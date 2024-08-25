// backend/config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'arin', // Specify your database name
      });
      console.log("Mongodb connected");
}
catch(err)
{
    console.log(err);
}
};

module.exports = connectDB;
