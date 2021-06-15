// import states from "../json/states.json"; //Json loading error

states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

// var jsonStates = JSON.parse(states);

var selectState = document.querySelector("#idState");

for(var i=0; i < states.length; i++){
    const optiontag = document.createElement("option");
    optiontag.setAttribute("value",states[i]);
    optiontag.textContent=states[i];
    selectState.appendChild(optiontag);    
}