const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//   ------------------------------------------------------------
const User = mongoose.model("user", UserSchema);
// registers our schema with mongoose

User.createIndexes();

module.exports = User;

//   -------------------------------------------------------------
// "schema" use for provide the charactristis in this case it hold user charactristis for login
// Our user model can then be accessed anywhere in our application by calling mongoose.model('User')
