const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurant');

const favorSchema = mongoose.Schema({
  uid: String,
  restaurant: Object,
}, { timestamps: true });

const favorRest = mongoose.model('favorRest', favorSchema);

module.exports = {
  add(inputObj) {
    return favorRest.create(inputObj);
  },

  getRestaurants(uid) {
    return favorRest.find({ uid }).sort({ updatedAt: 'asc' }).exec();
  },
};
