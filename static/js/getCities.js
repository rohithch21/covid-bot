// import {allCities} from "./city_data.js";
// console.log(allCities);
var allCities = {"Andhra Pradesh": ["S.P.S. Nellore", "Anantapur", "Srikakulam", "Krishna", "Kurnool", "Visakhapatnam", "East Godavari", "West Godavari", "Y.S.R. Kadapa", "Guntur", "Chittoor", "Prakasam", "Vizianagaram"],
"Arunachal Pradesh": ["East Kameng", "Capital Complex", "Lower Siang", "Tirap", "Kurung Kumey", "Upper Dibang Valley", "Lepa Rada", "Lower Dibang Valley", "Namsai", "Upper Siang", "Lohit", "Kra Daadi", "Siang", "West Kameng", "Tawang", "West Siang", "Upper Subansiri", "Lower Subansiri", "Pakke Kessang", "Longding", "Shi Yomi", "Kamle", "Papum Pare", "Changlang", "East Siang", "Anjaw"],
"Gujarat": ["Anand", "Narmada", "Botad", "Valsad", "Devbhumi Dwarka", "Porbandar", "Bharuch", "Dahod", "Kheda", "Panchmahal", "Patan", "Surendranagar", "Amreli", "Aravalli", "Rajkot", "Navsari", "Surat", "Mehsana", "Gir Somnath", "Bhavnagar", "Dang", "Junagadh", "Ahmedabad", "Kutch", "Sabarkantha", "Other State", "Chhota Udaipur", "Tapi", "Banaskantha", "Jamnagar", "Morbi", "Vadodara",  "Gandhinagar", "Mahisagar"],
"Harayana": ["Italians", "Sonipat", "Hisar",  "Charkhi Dadri", "Ambala", "Mahendragarh", "Nuh", "Jind", "Panipat", "Gurugram",  "Kaithal", "Rewari", "Faridabad", "Kurukshetra", "Sirsa", "Yamunanagar", "Rohtak", "Karnal", "Foreign Evacuees", "Fatehabad", "Panchkula", "Palwal", "Bhiwani", "Jhajjar"],
"Kerala": ["Kottayam", "Pathanamthitta", "Ernakulam", "Kollam", "Kannur",  "Malappuram", "Kasaragod", "Idukki", "Thrissur", "Palakkad", "Thiruvananthapuram", "Alappuzha", "Kozhikode", "Wayanad"],
"Maharashtra": ["Yavatmal", "Solapur", "Bhandara", "Buldhana", "Satara", "Hingoli", "Mumbai", "Nashik", "Wardha", "Parbhani", "Jalgaon", "Nandurbar", "Latur", "Dhule", "Other State", "Amravati",  "Sangli", "Chandrapur", "Beed", "Pune", "Gondia", "Palghar", "Thane", "Osmanabad", "Akola", "Raigad", "Ahmednagar", "Gadchiroli", "Jalna", "Washim", "Nanded", "Aurangabad", "Kolhapur", "Sindhudurg", "Ratnagiri",  "Nagpur"],
"Tamil Nadu": ["Thoothukkudi", "Dharmapuri", "Ariyalur", "Tiruchirappalli", "Airport Quarantine", "Other State", "Perambalur", "Tirupathur", "Tiruppur", "Tirunelveli", "Theni", "Chengalpattu", "Thiruvallur", "Vellore", "Nilgiris", "Ramanathapuram", "Krishnagiri", "Kallakurichi", "Coimbatore", "Sivaganga",  "Cuddalore", "Nagapattinam",  "Tenkasi", "Madurai", "Kanyakumari", "Karur", "Erode", "Railway Quarantine", "Pudukkottai", "Dindigul", "Thanjavur", "Ranipet", "Salem", "Virudhunagar", "Namakkal", "Tiruvannamalai", "Chennai", "Thiruvarur", "Viluppuram", "Kancheepuram"],
"Uttar Pradesh": ["Hamirpur", "Jaunpur", "Muzaffarnagar", "Pilibhit", "Deoria", "Etawah", "Rampur", "Varanasi", "Saharanpur", "Auraiya", "Kanpur Dehat", "Chandauli", "Bijnor", "Basti", "Prayagraj", "Ambedkar Nagar", "Ghaziabad", "Kanpur Nagar", "Chitrakoot", "Meerut", "Amethi", "Pratapgarh", "Shrawasti", "Ballia", "Sonbhadra", "Baghpat", "Sitapur", "Ghazipur", "Jalaun", "Azamgarh", "Lucknow", "Mahoba", "Mathura", "Mainpuri", "Gonda", "Kasganj", "Kannauj", "Aligarh", "Agra", "Sant Kabir Nagar", "Banda", "Bhadohi", "Budaun", "Mirzapur", "Jhansi", "Barabanki", "Mau", "Rae Bareli", "Farrukhabad", "Sultanpur", "Unnao", "Bulandshahr", "Hapur", "Gorakhpur", "Etah", "Amroha", "Kushinagar", "Balrampur", "Maharajganj", "Hathras", "Firozabad", "Gautam Buddha Nagar", "Siddharthnagar", "Moradabad", "Lalitpur", "Hardoi", "Shamli", "Bahraich", "Shahjahanpur", "Kaushambi", "Fatehpur", "Bareilly", "Lakhimpur Kheri", "Ayodhya", "Sambhal"],
"West Bengal": ["Hooghly",  "Birbhum", "Kalimpong", "Purba Bardhaman", "Paschim Bardhaman", "Other State", "Paschim Medinipur", "Purba Medinipur", "Uttar Dinajpur", "Howrah", "Malda", "South 24 Parganas", "Purulia", "North 24 Parganas", "Cooch Behar", "Jalpaiguri", "Darjeeling", "Murshidabad", "Jhargram", "Bankura", "Nadia", "Alipurduar", "Kolkata", "Dakshin Dinajpur"],
"Bihar": ["Darbhanga", "Muzaffarpur", "Banka", "Sheikhpura", "Katihar", "Khagaria", "Kishanganj", "Bhagalpur", "Purnia", "Other State", "Nawada", "Sitamarhi", "Gopalganj", "Saharsa", "Begusarai", "Arwal", "East Champaran", "Saran",  "Nalanda", "Samastipur", "Buxar", "Lakhisarai", "Supaul", "Madhepura", "Bhojpur", "Sheohar", "Siwan", "Araria", "Gaya", "Munger", "Rohtas", "Kaimur", "West Champaran", "Jamui", "Patna", "Madhubani", "Jehanabad", "Aurangabad", "Vaishali"],
"Chattisgarh": ["Kabeerdham", "Sukma", "Rajnandgaon", "Balrampur", "Uttar Bastar Kanker", "Korba", "Balod", "Mungeli", "Gariaband", "Other State", "Bametara", "Jashpur", "Bijapur", "Surguja", "Bilaspur", "Raigarh", "Surajpur", "Janjgir Champa", "Durg", "Koriya", "Dhamtari", "Dakshin Bastar Dantewada", "Gaurela Pendra Marwahi", "Baloda Bazar", "Mahasamund", "Narayanpur", "Bastar", "Kondagaon", "Raipur"],
"Delhi": [ "North Delhi", "South Delhi", "East Delhi","West Delhi","North East Delhi", "North West Delhi", "South West Delhi", "South East Delhi"],
"Himachal Pradesh": ["Kullu", "Hamirpur", "Sirmaur", "Kangra", "Mandi", "Chamba", "Lahaul and Spiti", "Shimla", "Solan", "Bilaspur", "Kinnaur", "Una"],
"Jharkhand": ["Pakur", "Ranchi", "Gumla", "Jamtara", "Palamu", "Sahibganj",  "Garhwa", "West Singhbhum", "East Singhbhum", "Bokaro", "Godda", "Dhanbad", "Khunti",  "Hazaribagh", "Ramgarh", "Giridih", "Koderma", "Dumka", "Deoghar", "Chatra", "Simdega", "Latehar", "Lohardaga", "Saraikela-Kharsawan"],
"Madhya Pradesh": ["Satna", "Alirajpur","Raisen", "Shahdol", "Mandla", "Hoshangabad", "Singrauli", "Dhar", "Chhatarpur", "Tikamgarh", "Shivpuri", "Vidisha", "Mandsaur", "Guna", "Neemuch",  "Datia", "Umaria", "Dindori", "Ashoknagar", "Niwari", "Agar Malwa", "Katni", "Bhind", "Khandwa", "Rewa", "Panna", "Seoni", "Narsinghpur", "Chhindwara", "Sehore", "Betul", "Ratlam", "Gwalior", "Anuppur", "Jabalpur", "Indore", "Jhabua", "Damoh", "Bhopal", "Shajapur", "Harda", "Sagar", "Barwani", "Dewas", "Rajgarh", "Balaghat", "Ujjain", "Morena", "Khargone", "Sidhi", "Burhanpur", "Sheopur"],
"Orissa": [ "Rayagada", "Malkangiri", "Jharsuguda", "Boudh", "Mayurbhanj", "Others", "Subarnapur", "Ganjam", "Kendujhar", "Cuttack", "Gajapati", "Deogarh", "Sambalpur", "Angul", "Bhadrak", "Balasore", "Kalahandi", "Jagatsinghpur", "Nuapada", "State Pool", "Nabarangapur", "Khordha", "Koraput", "Bargarh", "Kandhamal", "Sundargarh", "Dhenkanal", "Nayagarh", "Jajpur", "Puri", "Balangir", "Kendrapara"],
"Puducherry": [ "Mahe", "Karaikal",  "Puducherry", "Yanam"],
"Rajasthan": ["Rajsamand", "Tonk", "Barmer", "Baran", "Jaisalmer", "Nagaur", "Kota", "Sawai Madhopur", "Bhilwara", "Churu", "Udaipur", "Dungarpur", "Banswara", "Bharatpur", "Jodhpur", "Karauli", "Dholpur", "Italians", "Jhunjhunu", "Pratapgarh", "Hanumangarh", "Ajmer", "Bundi", "Pali", "Bikaner", "Jhalawar", "Other State", "BSF Camp", "Dausa", "Chittorgarh", "Sikar", "Ganganagar", "Jalore",  "Sirohi", "Evacuees", "Jaipur", "Alwar"],
"Uttarkhand": [ "Nainital", "Rudraprayag", "Uttarkashi", "Almora", "Dehradun", "Chamoli",  "Pithoragarh", "Champawat", "Tehri Garhwal", "Udham Singh Nagar", "Bageshwar", "Pauri Garhwal", "Haridwar"],
"Karnataka": ["City","Bangalore", "Shivamogga", "Chitradurga", "Mysuru", "Tumakuru", "Vijayapura", "Chikkamagaluru", "Ballari", "Raichur", "Belagavi", "Dharwad", "Kolar", "Davanagere", "Dakshina Kannada", "Koppal", "Kodagu", "Chikkaballapura", "Bengaluru Urban", "Uttara Kannada", "Ramanagara", "Haveri", "Bagalkote", "Kalaburagi", "Bidar", "Gadag", "Mandya", "Udupi", "Hassan", "Yadgir", "Chamarajanagara"]
}// import json or hardcode
var selectedState = document.querySelector("#idState").value;
var cities = allCities[selectedState] || [];
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
