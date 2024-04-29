const mongoose = require('mongoose');
const imgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  image: {
    type: String,
    // required: true
  }
})
module.exports = mongoose.model('Image', imgSchema);