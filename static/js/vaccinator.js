var taxnID;
var state_ID;
var states,districts;
function generateOTP(){
    var generateOtpUrl = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";
    idMob = document.querySelector("#mobile");
    var number = idMob.value;

    fetch(generateOtpUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"mobile" : number})

    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        taxnID = data["txnId"];
        var OTPblock = document.querySelector("#idOTPBlock");
        if(OTPblock.style.display == "none"){
            OTPblock.style.display = "block";
        }
    })
    .catch( error => {
        console.log(error);
        alert("Please enter a valid mobile number") 
    });
}

function confirmOTP(){
    var confirmOtpUrl = "https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP";
    idOTP = document.querySelector("#otp");
    var otp = idOTP.value;
    var cryptedOTP = CryptoJS.SHA256(otp).toString();
    fetch(confirmOtpUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"otp" : cryptedOTP, "txnId" : taxnID})

    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

function getStatesCowinAPI(){
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        states = data["states"] || [];
        var statetag = document.querySelector("#idState");
        for(var i=0; i < states.length; i++){
            const optiontag = document.createElement("option");
            optiontag.setAttribute("value",states[i]["state_name"]);
            optiontag.textContent=states[i]["state_name"];
            statetag.appendChild(optiontag);
        }
    })
}

function getDistrictsCowinAPI(){
    var selectedState = document.querySelector("#idState").value;
    for(var j = 0; j < states.length; j++){
        if(states[j]["state_name"] == selectedState){
            state_ID = states[j]["state_id"];
            console.log(state_ID);
        }
    }
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + state_ID)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        districts = data["districts"] || [];
        var districtTag = document.querySelector("#idCity");
        while(districtTag.childNodes.length > 0){
            districtTag.removeChild(districtTag.firstChild);
        }
        for(var k=0; k < districts.length; k++){
            const optiontag = document.createElement("option");
            optiontag.setAttribute("value",districts[k]["district_name"]);
            optiontag.textContent= districts[k]["district_name"];
            districtTag.appendChild(optiontag);
        }
    })
}
