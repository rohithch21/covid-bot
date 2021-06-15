var selectedState = document.querySelector("#idState").value;
var allCities = {} // import json or hardcode
var cities = allCities[selectedState]
if(selectedState == undefined || selectedState == "State"){

}
else{
    var citytag = document.querySelector("#idCity");
    for(var i=0; i < cities.length; i++){
        const optiontag = document.createElement("option");
        optiontag.setAttribute("value",cities[i]);
        optiontag.textContent=cities[i];
        citytag.appendChild(optiontag);    
    }


}
