import connectDB from '@/config/db';
import PropertyModel from '@/models/Property';

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    //get all of properties
    const properties = await PropertyModel.find({});

    //send a response
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong!', { status: 500 });
  }
};

/* API Routes
- that's where we're going to make our requests from our components to "fetch-properties", to add, update, delete properties and so on and authentication.

- anything to do with, server-side operations
*/

/* const GET
- we can call "GET", "POST", "PUT", "DELETE" and it will automatically handle those types of Requests | you don't have to say if the method equals GET or ...
*/

/* Fetch data
- create an API Route to use mongoose to get the properties from the database

- then, from properties-component we're going to fetch data from our API-Route

- then display the properties
*/
