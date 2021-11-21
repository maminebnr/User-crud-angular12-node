const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  address: {
    type: String
  }
}, {
  collection: 'Users'
})


module.exports = mongoose.model('User', User)