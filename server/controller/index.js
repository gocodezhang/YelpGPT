const gptAPI = require('./controller-openAI');
const yelpAPI = require('./controller-yelp');

function resultGPTParse(text) {
  const textNeed = text.substring(text.indexOf('1'));
  const textArr = textNeed.split('\n');
  return textArr.map((str) => (str.substring(3)));
}

module.exports = {
  responseAndRestaurant(req, res) {
    const { textParams } = req.query;
    gptAPI.getChatResponse(textParams)
      .then((resultGPT) => {
        const { content } = resultGPT;
        console.log(content);
        const restaurantArr = resultGPTParse(content);
        return Promise.all(restaurantArr.map((restaurant) => (yelpAPI.getRestaurant(restaurant, 'San Jose'))));
      })
      .then((restaurantInfoArr) => {
        console.log('Yelp responsed: ', restaurantInfoArr);
        res.status(200).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },
};
