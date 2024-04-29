const mongoose = require('mongoose');
const myUser = new mongoose.Schema({
  name: {
    type: String,
    requried: true
  },
  email: {
    type: String,
    requried: true
  },
  password: {
    type: String,
    requried: true
  },
  image: {
    type: String,
    requried: true
  },

})
module.exports = mongoose.model('newUser', myUser);