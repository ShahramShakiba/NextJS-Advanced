// Connecting to the Database
import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  //only the fields that are specified in our schema will be saved in our "db"
  mongoose.set('strictQuery', true);

  //don't connect again if the db is already connected
  if (connected) {
    console.log('MongoDB is already connected!');
    return;
  }

  //connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

/* Mongoose
* Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 

* It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
*/