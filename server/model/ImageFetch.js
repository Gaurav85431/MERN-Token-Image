const mongoose = require('mongoose');
const ImageSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String

  }
})
module.exports = mongoose.model('ImageFetch', ImageSchema);