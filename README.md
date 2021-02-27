# Travel App Project

## Overview
This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs & dynamically update the UI.

## Server
 server is `index.js` that do all the wroking job for sending request to app and the return data to the client js.
 the server work with 3 API interacting with each other , GEOname API, Weatherbit API, PIXabay API 
 geoname after input the city name this api take name and look for this city and return lat and lng.
 then the pixabay and weather will work with the data from geoname and start request to get data and then sent to client

 
## Client
client has  main func. in `formhandler.js` which do start the post datarequest to the server after the user inputs data files .

## Test 
- test server 
- test form handler

test server has error if a used the commented code; 
## Dependencies
body-parser, cors, dotenv, express, node-fetch, webpack, webpack-cli, @babel/core,  @babel/preset-env,
babel-loader, babel-polyfill,clean-webpack-plugin, css-loader, file-loader, html-webpack-plugin,
jest, mini-css-extract-plugin, node-sass, nodemon, optimize-css-assets-webpack-plugin, prettier, sass-loader, style-loader, supertest, terser-webpack-plugin, webpack-dev-server, workbox-webpack-plugin
 these all dependes use in the project 

 ## installation 
  to install al depandence in pakage.json, `npm install` 
   to run project dev mood, `npm run build-dev`
   to run project dev mood, `npm run build-prod`
   to run project test,`npm test`
## References
in the funcation TripCountDownAndDuration in `client/js/formhandler.js` form https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript







