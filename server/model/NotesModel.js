const mongoose = require('mongoose');
const noteSchmea = new mongoose.Schema({


  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  }


},
  { timestamps: true })

module.exports = mongoose.model('Note', noteSchmea)