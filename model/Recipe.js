const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  recipeName: String,
  ingredients: String,
  description: String,
});

const RecipeModel = mongoose.model("users", UserSchema);

module.exports = RecipeModel;
/*
this defines a Mongoose schema for a MongoDB collection named "users" with three fields: recipeName, ingredients, and description. 
And it creates a Mongoose model (RecipeModel) based on that schema and exports the model for use in other parts of the application.
*/
