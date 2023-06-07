const gptAPI = require('./controller-openAI');
const yelpAPI = require('./controller-yelp');

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
  });
}

module.exports = {
  responseAndRestaurant(req, res) {
    const { location, textParams } = req.query;
    gptAPI.getChatResponse(location, textParams)
      .then((resultGPT) => {
        const { content } = resultGPT;
        const restaurantArr = resultGPTParse(content);
        console.log(restaurantArr);
        return Promise.all(restaurantArr.map((restaurant) => (
          yelpAPI.getRestaurant(restaurant, location))));
      })
      .then((restaurantInfoArr) => {
        res.status(200).send(restaurantInfoArr);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },
};
