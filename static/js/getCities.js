// import {allCities} from "./city_data.js";
// console.log(allCities);
// import json or hardcode

var selectedState = document.querySelector("#idState").value;
var data = {"geoState" : selectedState}
var fetchCities = fetch('http://covidbot.live/data/cities/', {
    method: 'POST',
    body : JSON.stringify(data),
    }) // ******** make this https ********
  .then(response => response.json())
  .then(data=>{
        var cities = data[selectedState] || [];
        if(selectedState == undefined || selectedState == "State"){
            alert("Please select a State first");
        }
        else{
            var citytag = document.querySelector("#idCity");
            var noOfExistingCities = citytag.childElementCount;
            while(citytag.childNodes.length > 0){
                citytag.removeChild(citytag.firstChild);
            }
            for(var i=0; i < cities.length; i++){
                const optiontag = document.createElement("option");
                optiontag.setAttribute("value",cities[i]);
                optiontag.textContent=cities[i];
                citytag.appendChild(optiontag);    
            }
        }
  })