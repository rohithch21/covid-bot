var selectedState = document.querySelector("#idState").value;
var selectedCity = document.querySelector("#idCity").value;
var selectArea = document.querySelector("#idArea"); 

var data = {"geoCity" : selectedCity}

var fetchCities = fetch('http://covidbot.live/data/areas/', {
    method: 'POST',
    body : JSON.stringify(data),
    }) // ******** make this https ********
  .then(response => response.json())
  .then(data=>{  
        var allArea = data[selectedCity] || [];
        if(selectedCity == undefined || selectedCity == "City" || selectedState == "State" || selectedState == undefined){
            alert("Please select a State and City first");
        }
        else{
            var areatag = document.querySelector("#idArea");
            while(areatag.childNodes.length > 0){
                areatag.removeChild(areatag.firstChild);
            }
            for(var i=0; i < allArea.length; i++){
                const optiontag = document.createElement("option");
                optiontag.setAttribute("value",allArea[i]);
                optiontag.textContent=allArea[i];
                selectArea.appendChild(optiontag);
            }
        }
  })




