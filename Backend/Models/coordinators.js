const mongoose = require('mongoose');

// Define the schema for the coordinator collection
const coordinatorsSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  
});

// Create a Mongoose model for the coordinator collection
const coordinators = mongoose.model('coordinators', coordinatorsSchema);

module.exports = coordinators;
