// import states from "../json/states.json"; //Json loading error

states = ["Andhra Pradesh", "Arunachal Pradesh", "Bihar", "Delhi", "Gujarat", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Puducherry", "Rajasthan", "Tamil Nadu", "Telangana",  "Uttar Pradesh", "West Bengal"]

// var jsonStates = JSON.parse(states);

var selectState = document.querySelector("#idState");

for(var i=0; i < states.length; i++){
    const optiontag = document.createElement("option");
    optiontag.setAttribute("value",states[i]);
    optiontag.textContent=states[i];
    selectState.appendChild(optiontag);    
}
