// import states from "../json/states.json"; //Json loading error

states = ["Andhra Pradesh", "Arunachal Pradesh","Assam", "Bihar", "Chattisgarh", "Delhi","Daman and Diu","Goa", "Gujarat","Harayana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra","Meghalaya","Nagaland","Orissa", "Punjab", "Puducherry", "Rajasthan","Sikkim", "Tamil Nadu", "Telangana","Tripura",  "Uttar Pradesh","Uttarakhand", "West Bengal"]

// var jsonStates = JSON.parse(states);

var selectState = document.querySelector("#idState");

for(var i=0; i < states.length; i++){
    const optiontag = document.createElement("option");
    optiontag.setAttribute("value",states[i]);
    optiontag.textContent=states[i];
    selectState.appendChild(optiontag);    
}
