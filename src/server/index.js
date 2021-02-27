//dotenv
const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
// Dependencies
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const { Console } = require("console");
// Start up an instance of app // export 
 const app = express();

// Cors for cross origin allowance
const cors = require("cors");
const { response } = require("express");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // Middleware
app.use(bodyParser.json());
app.use(express.static("dist")); // Initialize the main project folder

console.log(__dirname);

app.get("/", function (req, res) {
res.sendFile("dist/index.html");
  //res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

//* APIs*//
/* ::: First API Geoname API ::: */
const baseGeonameURL = "http://api.geonames.org/searchJSON?q";
const userName = process.env.GEO_UserName;
// POST ROUTE for Geoname API-> received from client side
app.post("/GEOcity", async function (req, res) {
  // console.log("start app,post in server/ index")
  let city = encodeURI(req.body.city);
  let geoAPIUrl = `${baseGeonameURL}=${city}&maxRows=1&username=${userName}`;
  let response = await fetch(geoAPIUrl);
  try {
    const geoAPIData = await response.json();
    res.send(geoAPIData);
  } catch (error) {
    console.log(error)
  }
});

/* ::: Second API Weatherbit API ::: */
const baseWeatherbitURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
const weatherbitKEY = process.env.API_WeatherKey;
app.post("/Weather", async function (req, res) {
  let latitude = encodeURI(req.body.lat);
  let longitude = encodeURI(req.body.lng);
  const weatherAPIUrl = `${baseWeatherbitURL}&lat=${latitude}&lon=${longitude}&days=3&key=${weatherbitKEY}`;
  let response = await fetch(weatherAPIUrl);
  try {
    const weatherAPIData = await response.json();
    res.send(weatherAPIData);

  } catch (error) {
    console.log(error);
  }
});

/* ::: Third API pixabay API ::: */
const pixabayURL = "https://pixabay.com/api/?";
const pixabayKEY = process.env.API_PixaKey;
app.post("/Picture", async function (req, res) {
  let city = req.body.city;
  pixabayAPIUrl = `${pixabayURL}key=${pixabayKEY}&q= ${city}&image_type=photo`;
  let response = await fetch(pixabayAPIUrl);
  try {
    const pixabayAPIData = await response.json();
    res.send(pixabayAPIData);
  } catch (error) {
    console.log(error);
  }
});
//module.exports=app
//export { app }; 

module.exports=app
