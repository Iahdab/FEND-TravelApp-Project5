# Project Travel App 
***5th Project for [UDACITY](UDACITY.com) NanoDegree*** 

## Table of Contents

- [Overview](#Overview)
- [GettingStarted](#GettingStarted)
   - [Functionality](#Functionality)
   - [File](#File)
   - [CloningRepo](#CloningRepo)
   - [SetUpProject](#SetUpProject)
   - [RunningProject](#RunningProject)
   - [Dependencies](#Dependencies)
- [Deploying](#Deploying)

## Overview

This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs & dynamically update the UI.

## GettingStarted

  ### Functionality
  
   - **Server:**
     server is `index.js` that do all the wroking job for sending request to app and the return data to the client js.
     the server work with 3 API interacting with each other , GEOname API, Weatherbit API, PIXabay API 
     geoname after input the city name this api take name and look for this city and return lat and lng.
     then the pixabay and weather will work with the data from geoname and start request to get data and then sent to client
   - **Client:**
     client has  main func. in `formhandler.js` which do start the post datarequest to the server after the user inputs data files.
   - **Test:** 
     - test server 
     - test form handler
    
  ### File
   
   - package-lock.json
   - package.json
   - webpack.dev.js
   - webpack.prod.js
   - .babelrc
   - .gitignore
   - **SRC Folder**
     - **Client Folder**
       - index.js
       - **JS Folder**
         - formhandler.js
         - **Test Folder**
           - all tests are in this folder
       - **View Folder**
         - index.html
       - **Style Folder**
         - all SCSS styles are in this folder
     - **Server Folder**
       - index.js 
  
  ### CloningRepo
  
   - **Clone In Terminal:**\
    ```git clone https://github.com/Iahdab/Fend-Evalute-Nlp-project4.git```
     OR
   - **Clone In VS code Command Palatte:**\
    ```>Git: Colne  https://github.com/Iahdab/Fend-Evalute-Nlp-project4.git```
   - ***NOTE: also you can fetch or Download as zip file.***
  
  ### SetUpProject
  
   - **In terminal/vs code install these dependncey**
     - ``` npm install ```
   - **Sign UP For all APIS** 
     - [GeoNameAPI](http://www.geonames.org/)
     - [WeatherBitAPI](https://www.weatherbit.io/)
     - [PIXabayAPI](https://pixabay.com/api/docs/#)
   - **In project you must have 3Key FOR ALL APIS so the project can run**
     - in my project i used a .env file and add the key and installed  
         - ``` npm install dotenv ```
     - in .env file add your 3Key FOR ALL APISy as : 
         - ```GeoName_API_UserName=**************************```
         - ```WeatherBit_API_Key=**************************```
         - ```Pixabay_API_Key=**************************```
  
  ### RunningProject
  
  - **To run the Project:**
    - *Open 3 Terminal in VS code:*
      - Terminal 1: to start
        - ``` npm start ```
      - Terminal 2:to run in devlopment mode
        - ``` npm run build-dev ```
      - Terminal 3: to run in prodaction mode (to build dist folder)
        - ``` npm run build-prod ```
      - Terminal 4(optional): to run test
        - ``` npm test ```
    - *Lastly run the project on http://localhost:8080/ or http://127.0.0.1:8080 on web-broswer*
   
  ### Dependencies
   - **Depeondency used in project "Package.Json" :**
   body-parser, cors, dotenv, express, node-fetch, webpack, webpack-cli, @babel/core,  @babel/preset-env,
   babel-loader, babel-polyfill,clean-webpack-plugin, css-loader, file-loader, html-webpack-plugin,
   jest, mini-css-extract-plugin, node-sass, nodemon, optimize-css-assets-webpack-plugin, prettier,
   sass-loader, style-loader, supertest, terser-webpack-plugin, webpack-dev-server, workbox-webpack-plugin.
  
  ### References
  
  - Func. TripCountDownAndDuration in `client/js/formhandler.js`
    - [FromThisPage](https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript)
    
## Deploying
 
A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
