const gptAPI = require('./controller-openAI');
const yelpAPI = require('./controller-yelp');
const model = require('../mongoDB/db.js');

function resultGPTParse(text) {
  const textNeed = text.substring(text.indexOf('1'));
  const textArr = textNeed.split('\n');
  console.log('gptcontent:', textArr);
  const firstThreeRes = textArr.filter((str) => (
    str.length !== 0)).map((str) => (str.substring(3)));

  return firstThreeRes.map((str) => {
    if (str.indexOf(':') !== -1) {
      str = str.substring(0, str.indexOf(':'));
    }

    if (str.indexOf('-') !== -1) {
      str = str.substring(0, str.indexOf('-'));
    }
    return str;
  }).slice(0, 5);
}

module.exports = {
  responseAndRestaurant(req, res) {
    const { location, textParams, type } = req.query;
    gptAPI.getChatResponse(location, textParams, type)
      .then((resultGPT) => {
        const { content } = resultGPT;
        const restaurantArr = resultGPTParse(content);
        console.log(restaurantArr);
        return Promise.all(restaurantArr.map((restaurant) => (
          yelpAPI.getRestaurant(restaurant, location, type))));
      })
      .then((restaurantInfoArr) => {
        console.log(restaurantInfoArr);
        const uniqueRestaurantInfoArr = [...new Set(restaurantInfoArr)].filter((resObj) => (resObj.id !== 'IRD_9JUjR-06zztisuTdAA'));
        res.status(200).send(uniqueRestaurantInfoArr);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },

  addFavorRestaurant(req, res) {
    const { body } = req;
    model.add(body)
      .then(() => {
        console.log('successfully added');
        res.status(200).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },

  getFavorRestaurants(req, res) {
    const { uid } = req.query;
    model.getRestaurants(uid)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },
};
