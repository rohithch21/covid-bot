const areas = require("../json/areas.json");

var jsonObj = JSON.parse(areas);

var jsonStates = jsonObj["states"];
var selectState = document.querySelector("#idState");

for(var i=0; i < jsonStates.length; i++){
    const optiontag = document.createElement("option");
    optiontag.setAttribute("value",jsonStates[i]);
    optiontag.textContent=jsonStates[i];
    selectState.appendChild(optiontag);
     
}