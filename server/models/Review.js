const mongoose = require('mongoose');

const Review = new mongoose.Schema({
  serviceProviderId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Review', Review);