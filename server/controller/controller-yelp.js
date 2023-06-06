require('dotenv').config();
const axios = require('axios');

const url = 'https://api.yelp.com/v3';

module.exports = {
  getRestaurant(term, location) {
    // const { content } = response;
    const endpoint = '/businesses/search';
    return axios.get(url + endpoint, {
      params: {
        term,
        location,
        categories: ['restaurants'],
        limit: 1,
      },
      headers: {
        Authorization: `Bearer ${process.env.YELP_KEY}`,
      },
    })
      .then((result) => (result.data.businesses[0]));
    // .then((result) => {
    //   console.log(result.data.businesses);
    //   res.status(200).send();
    // })
    // .catch((err) => {
    //   console.log(err);
    //   res.status(400).send();
    // });
  },
};
