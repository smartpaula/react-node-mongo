// back/model/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  company: { type: String },
  username: { type: String },
  email: { type: String },
  address: { type: String },
  zip: { type: String },
  state: { type: String },
  country: { type: String },
  phone: { type: String },
  photo: { type: String },
});

module.exports = mongoose.model('User', userSchema);
