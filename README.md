# Getting Started with ETS News (Entertainment, Technology, and Sports News)

This project was created using React and the NewsApi

## Live Deployment

The live version of the app can be found here: https://github.com/naimulh247/ets-news.git

## Downloading the Project

To download the project run:

### `git clone https://github.com/naimulh247/ets-news.git`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Project Structure Tree

From the project directory, this is the project structure tree:

```bash
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── ent.jpeg
│   │   ├── sports.jpg
│   │   └── tech.jpg
│   ├── index.html
│   ├── manifest.json
│   └── style.css
└── src
    ├── Components
    │   ├── App
    │   │   ├── App.css
    │   │   └── App.js
    │   ├── Entertainment
    │   │   └── Entertainment.js
    │   ├── Home
    │   │   └── Home.js
    │   ├── Sports
    │   │   └── Sports.js
    │   └── Technology
    │       └── Technology.js
    ├── Elements
    │   ├── EntertainmentGrid
    │   │   └── EntertainmentGrid.js
    │   ├── HomeMain
    │   │   └── HomeGrid.js
    │   ├── LoadMoreBtn
    │   │   ├── LoadMoreBtn.css
    │   │   └── LoadMoreBtn.js
    │   ├── SearchBar
    │   │   └── SeachBar.js
    │   ├── SportsGrid
    │   │   └── SportsGrid.js
    │   └── TechnologyGrid
    │       └── TechnologyGrid.js
    ├── config.js
    ├── index.js
    └── reportWebVitals.js

    ```
<hr>

Project structure with annitation:
```bash
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── ent.jpeg
│   │   ├── sports.jpg
│   │   └── tech.jpg
│   ├── index.html
│   ├── manifest.json
│   └── style.css
└── src
    ├── Components
    │   ├── App
    │   │   ├── App.css
    │   │   └── App.js <b>-- Handles the Routing for each page </b>
    │   ├── Entertainment
    │   │   └── Entertainment.js -- Handles the Api call for Entertainment page of the website along with rendering it
    │   ├── Home
    │   │   └── Home.js <b>-- Handles the Api call for home page of the website, redering the top 3 articles in each category and search </B>
    │   ├── Sports
    │   │   └── Sports.js <b>-- Handles the Api call for Sports page of the website along with rendering it</b>
    │   └── Technology
    │       └── Technology.js <b> -- Handles the Api call for Technology page of the website along with rendering it</b>
    ├── Elements
    │   ├── EntertainmentGrid
    │   │   └── EntertainmentGrid.js <b>-- Grid template for the Entertainment page </b>
    │   ├── HomeMain
    │   │   └── HomeGrid.js <b>-- Grid template for the Entertainment page </b>
    │   ├── LoadMoreBtn
    │   │   ├── LoadMoreBtn.css <b>-- Load buttons style</b>
    │   │   └── LoadMoreBtn.js<b>-- Load button for subcategory pages</b>
    │   ├── SearchBar
    │   │   └── SeachBar.js <b>-- Search bar also acts like the header, with being able to seach in home page and in each category pages</b>
    │   ├── SportsGrid
    │   │   └── SportsGrid.js <b>-- Grid template for the Sports page</b>
    │   └── TechnologyGrid
    │       └── TechnologyGrid.js <b>-- Grid template for the Technology page</b>
    ├── config.js <b>-- Contains the base url of the NewsApi, ApiKey, and etc </b>
    ├── index.js <b>-- Applications entry point</b>
    └── reportWebVitals.js
    ```
## Project Ideas and Walkthrough

The idea of the project is to be as modular as possible. Most of the elements are booken down to small pices to handle each respective pages. 

<b>Home.js:</b> Homepage shows the first 3 articles in the Api call and then when something is searched it shows the first 3 results in each categories. 

<b>Entertainment.js, Technology.js, Sports.js:</b> using their respective grids, the pages shows the aticles/ website, and using the <b>SearchBar.js</b> it can narrow the results in each page, allowing the user to search for specific topic/idea.

## Future Improvements

- Animated cards
- Cards changing based on the category
- Homepage parallel Api calls is not the most effient when searching 
- Carry search from homepage to either Entertainment, Technology, or Sports (Pass parameters through each component)
- Better mobile responsiveness 
- Progressive web app??

## Lighthouse Scores

Current Lighthouse Score for Desktop:

<img src="https://i.paste.pics/79c1c64374b53c27950332fc49e6ee94.png?trs=de0902217605d47a938ee6691756f3abd3afa1601ec69e4698b6280a83087559"/>