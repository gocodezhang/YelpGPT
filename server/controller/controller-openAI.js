require('dotenv').config();
const axios = require('axios');

const model = 'gpt-3.5-turbo';
const messages = [];

module.exports = {
  // getChatResponse(req, res) {
  //   const configuration = new Configuration({
  //     apiKey: process.env.OPENAI_KEY,
  //   });
  //   const openai = new OpenAIApi(configuration);

  //   openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [{role: "user", content: "Hello world"}],
  //   })
  //     .then((result) => {
  //       console.log(result);
  //       res.status(200).send();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(400).send();
  //     });
  // },
  getChatResponse(location, message) {
    if (location) {
      const locationMessage = {
        role: 'user',
        content: `give me a list of three restaurants names in ${location}`,
      };
      const userMessage = {
        role: 'user',
        content: message,
      };
      messages.push(locationMessage, userMessage);
    } else {
      const newMessage = {
        role: 'user',
        content: message,
      };
      messages.push(newMessage);
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
