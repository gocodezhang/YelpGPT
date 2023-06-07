const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurant');

const favorSchema = mongoose.Schema({
  uid: { type: String, unique: true },
  restaurant: Object,
});

const favorRest = mongoose.model('favorRest', favorSchema);

module.exports = {
  add(inputObj) {
    return favorRest.create(inputObj);
  },

  getRestaurants(uid) {
    return favorRest.find({ uid }).exec();
  },
};
