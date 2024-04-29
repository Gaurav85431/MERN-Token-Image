const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("vote", voteSchema);