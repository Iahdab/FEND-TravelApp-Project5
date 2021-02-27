import fetch from "node-fetch";

let cityFullInfo={};
let weatherFullInfo={};
let pixabayFullInfo={};

function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    console.log("::: Form Submitted :::");

    let cityInput = document.getElementById('citydest').value;
    let startDate = document.getElementById("starDate").value;
    let endDate = document.getElementById("endDate").value;

    if(checkIsEmpty()){
        /*POST-DATA CALL FOR GEO-NAME APIS*/
        postDataForGeoName('http://localhost:8080/GEOcity', { city:cityInput  }) 
        .then(function (){
        //    console.log("*** Fetching DATA form GeoName API in hnadler form***");
           document.getElementById('tripcity').innerHTML = ` Conutry:<strong>${cityFullInfo.country}</strong>,
           Conutry Code:<strong>${cityFullInfo.code}</strong>, City:<strong>${cityFullInfo.city}</strong> . `
            /*POST-DATA CALL FOR weatherbit APIS */
           postDataForWeatherbit('http://localhost:8080/Weather',cityFullInfo)
           .then(function (){
            //    console.log("*** Fetching DATA form weatherbit  API in hnadler form***");
               let fullSentences = `The weather 
               is <strong>${weatherFullInfo['data'][0].weather.description}</strong> & 
               Temperature: <strong>${weatherFullInfo['data'][0].temp}&#8451</strong>, 
               hightest:<strong>${weatherFullInfo['data'][0].max_temp}&#8451</strong>
               & lowest:<strong>${weatherFullInfo['data'][0].low_temp}&#8451</strong>`;
               document.getElementById('tripweather').innerHTML =fullSentences;
            })
           /*POST-DATA CALL FOR pixabay APIS*/
           postDataForPixAbay('http://localhost:8080/Picture',{  city:cityFullInfo.city })
            .then(function (){
            //  console.log("*** Fetching DATA form pixabay API in hnadler form***");
             console.log(pixabayFullInfo)
             let urlimage=pixabayFullInfo.hits[0].webformatURL;
             document.getElementById('trippicture').src=`${urlimage}`;
         });
          
        }) 
        /*Duration And countDown*/
        TripCountDownAndDuration(startDate, endDate);
    }
    else{
        alert('Some of Input fields are empty, Try again.');
    }
}// end of funaction handle sumbit 

//* HELPER Functions *//
/*checkIsEmpty to check all input fields are not empty */
function checkIsEmpty()
{
    if(document.getElementById('citydest').value.length!==0 &&
    document.getElementById('starDate').value.length!==0 &&
    document.getElementById('endDate').value.length!==0
    )
    { return true}
    else {
        return false
    }
}
/* TripCountDownAndDuration to calculate trip duration &  */
function TripCountDownAndDuration(startDate, endDate){
/*Calculate duration and countdown */
let startingDate = new Date(startDate);
let endingDate = new Date(endDate);
let todayDate = new Date();

//Calculate -> trip Duration & show in html 
let tripDurationInTime = endingDate - startingDate;
let tripDurationInDays = tripDurationInTime / (1000 * 3600 * 24);
if (tripDurationInDays > 1) {
    
    document.getElementById('tripduration').innerHTML = `
    Trip Duration is:  <strong>${tripDurationInDays}</strong>  Days.
Starting at   <strong>${startingDate.toLocaleDateString()}</strong> 
& Ending at   <strong> ${endingDate.toLocaleDateString()}</strong>`
} else {
    document.getElementById('tripduration').innerHTML = `
    
    Trip Duration is: <strong>${tripDurationInDays}</strong> Day.
Starting at <strong>${startingDate.toLocaleDateString()}</strong> & 
Ending at <strong> ${endingDate.toLocaleDateString()}</strong>`
}

// Calculate -> trip countDown & show in html 
let tripCountDownInTime = startingDate - todayDate;
let tripCountDownInDays = Math.round(tripCountDownInTime / (1000 * 3600 * 24));
if (tripCountDownInDays > 1) {
    document.getElementById('tripcountdown').innerHTML = ` 
    Days lift before the trip is:<strong>${tripCountDownInDays}</strong> days.`
} else {
    document.getElementById('tripcountdown').innerHTML = `
     Days lift before the trip (countdown) is: <strong>${tripCountDownInDays}</strong> day.`
}
}
/*POST-DATA Config FOR GEO-NAME APIS */
const postDataForGeoName = async (url = "", data = {}) =>{
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });//end of response 
    try {
        const newData = await response.json();
        cityFullInfo={
            city:newData.geonames[0].name,
            country:newData.geonames[0].countryName,
            lat:newData.geonames[0].lat,
            lng:newData.geonames[0].lng,
            code:newData.geonames[0].countryCode,
        }
        return cityFullInfo;
       } catch (error) {
        console.log(error)
    }
};
/*POST-DATA Config FOR weatherbit APIS */
const postDataForWeatherbit = async (url = "", data = {}) =>{
    // console.log("**** Fetching Data form Weatherbit API ****");
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });//end of response
    try {
        weatherFullInfo = await response.json();
       return weatherFullInfo;
    } catch (error) {
        console.log(error)
    }
}
/*POST-DATA Config FOR pixabay APIS */
const postDataForPixAbay = async (url = "", data = {}) =>{
    // console.log("****Fetching Data form Pixabay API****");
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });//end of response 
    try {
        pixabayFullInfo = await response.json();
        return pixabayFullInfo;
    } catch (error) {
        console.log(error)
    }
}
export { handleSubmit }; 

