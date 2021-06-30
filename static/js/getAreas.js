var areas = {
    "Bangalore": ["All across Bangalore","Agrahara", "AGS layout", "Akshayanagar", "Akshaynagar", "Ali Askar Road", "Allalasandra", "Amrutahalli", "Anandnagar", "Anekal", "Ashwath Nagar", "Attiguppe", "Austin Town", "Babusapalya", "Bagalgunte", "Bagalur", "Banashankari", "Banaswadi", "Bangalore South", "Bannerghatta", "Basavanagudi", "Basaveshvaranagar", "Basveshwanagar", "Begur", "BEL", "Bellandur", "Benson Town", "Bhoopasandra", "Bilekahalli", "Bilishivale", "Binnypet", "Bommanahalli", "Borewell road", "Borewell Road", "Brookefield ", "BTM Layout", "Budigere", "Carmelaram", "Central Bangalore", "Chanasandhra", "Chandra Layout", "Chikkabanavara", "Chikkabellandur", "Chikkalasandra", "Chodarapalya", "Cooke Town", "Cox Town", "Cunningham road", "CV Raman Nagar", "Deepanjalinagar", "Devarachikanahalli", "Devasandra", "Diamond district", "Doddakallasandra", "Dodsworth Layout", "Dollars Colony", "Domlur", "ECC road", "Ejipura", "Electronic City", "Fraser Town", "Ganganagar", "Geddalahalli", "Girinagar", "Gokula Extension", "Goripalya", "Gottigere", "Gunjur", "Hadosiddapura", "HAL", "Hanumanthnagar", "Hapinagar", "Haralur Road", "HBR layout", "Hebbal", "Hennur", "Hongasandra", "Hoodi", "Hope Farm", "Horamavu", "Hosa Road", "Hosakerehalli", "Hosakerihall", "Hoskerehalli", "Hoskote", "Hosur", "HRBR Layout", "HSR Layout", "Hulimavu", "Immidahalli", "Indiranagar", "ITPL", "Ittamadu", "Jakkur", "Jalahalli", "Jayanagar", "Jeevanbheema Nagar", "JP Nagar", "Kadubeesanahalli", "Kadugodi", "Kagadaspura", "Kaggadasapura", "Kaggalipura", "Kalena", "Kalkere", "Kalyan Nagar", "Kammanahalli", "Kanakapura Road", "Kasturinagar", "Kathriguppe", "Kavalbyrasandra", "Kempapura", "Kengeri", "Kodathi", "Kodigehalli", "Kogilu", "Konankunte Cross", "Koramangala", "KR Puram", "Kudlu Gate", "Kumara Park", "Kumara Park West", "Kumara Swami Layout", "Kumaraswamy Layout", "Kumbalgodu", "Kundalahalli", "Kuvempunagar", "Lingarajpuram", "Madiwala", "Magadi Road", "Mahadevapura", "Mahalakshmi Layout", "Mahalakshmi layout", "Malagala", "Mallathalli", "Malleshpalya", "Malleswaram", "Manyata Tech Park", "Marathahalli", "Maruthi Sevanagar", "Mathikere", "Millers Road", "Moodalpalya", "MS Palya", "Mudalpalya", "Munnekolala", "Murgeshpalya", "Mysore Road", "Nagadevanahalli", "Nagarbhavi", "Nagawara", "Nandi Durga Road", "Nandini Layout", "Nayandahalli", "Nelurhalli", "New BEL Road", "New Thippasandra", "Nimbekaipura", "North Bangalore", "NR Colony", "NRI Layout", "Nyanappanhalli", "Old Airport Road", "Old Madras Road", "Panathur", "Peenya", "Prashant Layout", "Prashant Nagar", "Prashanth layout", "Prashanth Layout", "Raghuvanahalli", "Rajaji Nagar", "Rajajinagar", "Rajarajeshwari Nagar", "Ramamurthy Nagar", "Richardstown", "Richmond Road", "RMV Extension", "RMV II Stage", "RPC Layout", "RT Nagar", "Sadashiv Nagar", "Sadashivnagar", "Sahakarnagar", "Sarakki", "Sarjapur", "Seegahalli", "Seegehalli", "Seshadaripuram", "Shanthivana", "Silkboard", "Singapura", "Singasandra", "South Bangalore", "Sultanpalya", "Tavarekere", "TC Palya", "Thanisandra", "Thindlu", "Thippasandra", "Tin factory", "Tyagarajanagar", "Ulsoor", "Uttarahalli", "Varthur", "Vasanth Nagar", "Vasanthapura", "Vasanthnagar", "Vidyaranyapura", "Vignan Nagar", "Vijaya Bank Layout", "Vijaynagar", "Vishwapriya layout", "VV Puram ", "Vyalikaval Layout", "Whitefield", "Wilson Garden", "Yelahanka", "Yellachanahalli", "Yeshwantpur"],
    "Delhi": ["All across Delhi", "Vasant Kunj", "Indirapuram", "Chittranjan park", "Green Park", "Jamia Nagar,", "Ghaziabad", "Anand Lok", "Sainik Farms", "Ashok Vihar", "Jamia", "Vasant Vihar", "GK2", "Saket", "Sheikh Serai", "Punjabi Bagh", "Patparganj", "Panchsheel enc.", "West Delhi", "Paschim Vihar", "Bhogal", "Greater Noida", "Noida", "Faridabad", "Alaknanda", "Prashant Vihar", "Dwarka", "Kalkaji", "New Friends Colony", "Rajouri garden", "Rohini", "Rani Bagh Pitampura", "Tilak Nagar", "Vasundhra", "Shalimar Bagh", "GK1", "Kaushambi", "North Delhi", "Khirki extension", "GK", "Sarita Vihar", "CR park", "Malviya nagar", "Gulmohar Park", "Soami Nagar", "Vaishali", "Panchsheel Park", "South Delhi", "Gurgaon", "Hauz Khas", "Okhla", "HauzKhas", "Pitampura", "Shakti Nagar", "Raja Garden", "Safdarjung", "Lajpat Nagar", "Jangpura", "Mayur Vihar", "East Delhi", "Civil Lines", "Janakpuri"],
    "North Delhi" : ["Shakti Nagar"],
    "South East Delhi" : ["Chittranjan park", "Bhogal", "Okhla","Jangpura" ],
    "South West Delhi" : ["Safdarjung","Janakpuri"],
    "North West Delhi" : [ "Prashant Vihar", "Rani Bagh Pitampura",  "Shalimar Bagh", "Jahangirpuri"],
    "North East Delhi" : ["Kaushambi"],
    "Central Delhi" : ["Civil Lines",  "Chandni Chowk", "Connought Place", "Karol Bagh"],
    "South Delhi" : ["Vasant Kunj","Green Park","Jamia Naga", "Anand Lok","Sainik Farms" ,"Vasant Vihar", "GK2", "Saket", "Sheikh Serai","Panchsheel enc.", "Bhogal", "Faridabad",  "Kalkaji", "GK1","Khirki extension", "GK", "Sarita Vihar", "CR park", "Malviya nagar", "Gulmohar Park","Soami Nagar", "Hauz Khas",  "Lajpat Nagar", ],
    "East Delhi" : ["Indirapuram", "Ghaziabad","Ashok Vihar","Greater Noida", "Noida",  "Vasundhra", "Mayur Vihar", "East Delhi"],
    "West Delhi" : ["Punjabi Bagh", "Patparganj","West Delhi","Paschim Vihar","Dwarka", "Rajouri garden", "Rohini","Tilak Nagar", "Safdarjung"],
    "Chennai":["All across Chennai","Adambakkam", "Alwarpet", "Alwarthirunagar", "Ambattur", "Anna Nagar", "Arumbakkam", "Ashok Nagar", "Aynavaram", "Camp Road", "Cholaimedu", "Egmore", "Hirumullaivoyal", "Kesavardhini", "Kilpauk", "KK Nagar", "Kodambakkam", "Kolathur", "Koyembedu", "Madipakkam", "Maduravoyal", "Mandaveli", "Medavakkam", "Mogappair", "Moggapair", "Mugappair", "Mylapore", "Nandanam", "Nanganallur", "Nerkundram", "Nolambur", "Nolumbur", "Padi", "Perambur", "Porur", "Purashawalkam", "Purusaiwalkam", "Purusawalkam", "Saligramam", "Selaiyur", "Shenoy Nagar", "Sithalapakkam", "Teyampet", "Thirumangalam", "TNagar", "Ullagram", "Vadapalani", "Valasaravakkam", "Velachery", "Vepery", "Villivakkam", "Virugambakkam", "West Mambalam"],
    }
    var selectedState = document.querySelector("#idState").value;
    var selectedCity = document.querySelector("#idCity").value;
    // var jsonObj = JSON.parse(areas); // try to import the local josn data
    var jsonObj = areas;
    var allArea = jsonObj[selectedCity] || [];
    if(allArea.length == 0){
        allArea = ["All across "+selectedCity]
    }
    var selectArea = document.querySelector("#idArea"); 
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
    