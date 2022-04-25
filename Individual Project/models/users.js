const mongoose = require('mongoose');

var mongoose = require("mongoose");
module.exports = mongoose.model("users", userSchema({
  email:
  {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  password:
  {
    type: String,
    required: true
  }
}, {collection: 'individual-task'}));


