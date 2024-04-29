const mongoose = require('mongoose');
const TitleImgSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('TitleImage', TitleImgSchema);