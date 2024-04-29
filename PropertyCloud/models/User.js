import { Schema, model, models } from 'mongoose';

//the structure of the user document in MongoDB
const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists.'],
      required: [true, 'Email is required!'],
    },

    username: {
      type: String,
      required: [true, 'Username is required!'],
    },

    image: {
      type: String,
    },

    bookmarks: [
      //is gonna be array of property-IDs
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
        //the collection that we're getting the IDs
      },
    ],
  },
  //to have "Created-At" & "Updated-At"
  {
    timestamps: true,
  }
);

// Create user using Mongoose's model function
const User = models.user || model('User', UserSchema);

export default User;

/* MongoDB and Data | Models
- with MongoDB we don't need to describe our data in the database layer like we would with like MySQL or Postgres or any relational database.

- instead we create our models within our application

- we're going to use mongoose to do that
*/

/* schema
- schema : is where we define all of our fields such as email, username, password and all that good stuff
*/

/* models.user || model('User', UserSchema)
- This line of code checks if a model named 'user' already exists in the models object. 

- If it does, it assigns it to the User variable; 

- otherwise, it creates a new model named 'User' using the UserSchema.
*/
