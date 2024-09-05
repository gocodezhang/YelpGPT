<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


# YelpGPT

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#backend-and-api-integration">Backend and API integration</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

**YelpGPT** is a web application to make real-time restaurant recommendations in a conversational setting powered by AI. Instead of having users to find and apply numbers of filters, users in the application can receive restaurant recommendations by simply chatting with AI.

1. Users will only need to enter their locations first
2. Then enter any key words or sentences like you were having a normal conversation
3. After sent, a list of restaurant recommendations will be generated
   * Registered users will have the options to save restauants in bookmark
   * Users can modify their locations or request regeneration to update recommendations
   * **Users can continue chatting by entering additional key words or sentences and a new list of restaurant recommendation will be generated based on entire dialogue context**

*See below video demo as references*

https://github.com/user-attachments/assets/0f8b53c0-238e-43b5-91dc-6543a557f9f3



### Built With

* ![Express.js]
* ![Node.js]
* ![React]
* ![jQuery]
* ![Firebase]
* ![MongoDB]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT DETAILS -->
## Backend and API integration
To enable conversational restaurant recommendation, the backend has embedded the logic to integrate OpenAI API with Yelp API. Please note below and the screenshots for the logic details:
1. Post receiving users' input, the backend will send the requests to OpenAI API (ChatGPT)
    * **Prompting Technique**
        * Always start with a predefined question that asks for restaurant names and requests to return results as a list to ensure consistency in ChatGPT's response
        * Then append user's input in following context so that user's requests are also taking into account
        * Specify number of restaurant in prompting to limit cost and reduce response time
2. Once receiving ChatGPT's response, the backend will process the text response into vaild parameters
3. The backend will send requests for corresponding restaurants based on the parameters to Yelp API

![Backend]

<!-- GETTING STARTED -->
## Getting Started

This section contains the instruction of how to set up this project in your local environment.

### Prerequisites

Please make sure **npm** is installed or run the below command in your terminal to install **npm**
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Obtain API keys from [OpenAI API](https://openai.com/product) and [Yelp API](https://docs.developer.yelp.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/gocodezhang/YelpGPT
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```js
   OPENAI_KEY = 'ENTER YOUR API';
   YELP_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Create a component to store all previous input and display to the user
- [ ] Embed a map to show locations of recommended restaurant

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Gaoyuan Zhang
* [![github]](https://github.com/gocodezhang)
* [![gmail]](mailto:zgy25483387@gmail.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[jQuery]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Firebase]: https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black
[location-input]: asset/Location-input.png
[keyword-input]: asset/Initial-keywords.png
[result]: asset/initial-results-withsignin.png
[Backend]: asset/Backend.png
[github]: https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white
[gmail]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
