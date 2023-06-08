require('dotenv').config();
const axios = require('axios');

const model = 'gpt-3.5-turbo';
const messages = [];
const defaultNumber = 'five';

module.exports = {
  getChatResponse(location, message, type) {
    if (type === 'initial') {
      const locationMessage = {
        role: 'user',
        content: `give me a list of ${defaultNumber} restaurants names in ${location}`,
      };
      const userMessage = {
        role: 'user',
        content: message,
      };
      messages.push(locationMessage, userMessage);
    } else if (type === 'ongoing') {
      const newMessage = {
        role: 'user',
        content: message,
      };
      messages.push(newMessage);
    } else if (type === 'changeLocation') {
      const locationChangeMessage = {
        role: 'user',
        content: `give me a list of ${defaultNumber} restaurants names in ${location} instead`,
      };
      messages.push(locationChangeMessage);
    } else {
      const moreResultMessage = {
        role: 'user',
        content: `can you recommend ${defaultNumber} more similar restaurants?`,
      };
      messages.push(moreResultMessage);
    }

    console.log({ model, messages });
    return axios.post('https://api.openai.com/v1/chat/completions', { model, messages }, {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      },
    })
      .then((result) => (result.data.choices[0].message));
    // .then((response) => {
    //   console.log('openAPI: ', response.data.choices[0].message);
    //   res.status(200).send(response.data.choices[0].message);
    // })
    // .catch((err) => {
    //   console.log(err);
    //   res.status(400).send();
    // });
  },
};
