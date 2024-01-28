const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RecipeModel = require("./model/Recipe");
// express framework for building web applications with Node.js.
// mongoose for MongoDB object modeling tool to asynchronous environment.
// cors middleware for enable Cross-Origin Resource Sharing.
// RecipeModel is importing a Mongoose model for handling recipe data.

const app = express(); // Creates an Express application.
app.use(cors()); // enables CORS to perform  cross-origin requests
app.use(express.json()); //it's an Middleware to parse JSON

mongoose.connect(
  "mongodb+srv://username:password@cluster5.zzu4wuw.mongodb.net/crud"
); //Connects to a MongoDB database using the connection string.

app.get("/", (req, res) => {
  RecipeModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
/*
GET:------------------------------------------------------------------------------
Find all recipes in the database using RecipeModel.find().
Sends the retrieved recipes as JSON in the response.
 */

app.post("/create", (req, res) => {
  RecipeModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
/*
POST:-----------------------------------------------------------------------------
Creates a new recipe in the database using RecipeModel.create(req.body).
Sends the created recipe as JSON in the response.
*/

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  RecipeModel.findByIdAndUpdate(
    { _id: id },
    {
      recipeName: req.body.recipeName,
      ingredients: req.body.ingredients,
      description: req.body.description,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
/*
PUT:------------------------------------------------------------------------------
Updates an existing recipe by ID using RecipeModel.findByIdAndUpdate().
Sends the updated recipe as JSON in the response.
*/

app.delete("/deleteuser/:id", (req, res) => {
  const id = req.params.id;
  RecipeModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});
/*
DELETE:---------------------------------------------------------------------------
Deletes a recipe by ID using RecipeModel.findByIdAndDelete().
Sends a JSON response with the deletion status.
*/

app.listen(3001, () => {
  console.log("Server is Running");
});
/*
app.listen(3001): This method starts the Express.js application and makes it listen on a specified port. 
() => { console.log("Server is Running"); }: This is an arrow function that serves as a callback. It will be executed once the server is successfully started and is ready to accept connections.
*/
