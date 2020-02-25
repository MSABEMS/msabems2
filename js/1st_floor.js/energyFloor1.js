// Retrieve data from Firebase -> Outdoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter");
var ref_kW_EO = ref_indoor.child("F1EO")
var ref_kW_Conference = ref_indoor.child("F1CON")
var ref_kW_Bedroom = ref_indoor.child("F1BED")

ref_kW_EO.on("value", function(snapshot) {
    console.log("Get kW_EO from firebase")
    //  console.log(snapshot.val());
    var kW_EO = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_EO").innerHTML = kW_EO;
    var kW_EO_local = localStorage.setItem("kW_EO", kW_EO)
  });
 
ref_kW_Conference.on("value", function(snapshot) {
    console.log("Get kW_EO from firebase")
    //  console.log(snapshot.val());
    var kW_Conference = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Conference").innerHTML = kW_Conference;
    var kW_Conference_local = localStorage.setItem("kW_Conference", kW_Conference)
});

ref_kW_Bedroom.on("value", function(snapshot) {
    console.log("Get kW_EO from firebase")
    //  console.log(snapshot.val());
    var kW_Bedroom = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Bedroom").innerHTML = kW_Bedroom;
    var kW_Bedroom_local = localStorage.setItem("kW_Bedroom", kW_Bedroom)
});

var cal_kW_EO = parseInt(localStorage.getItem("kW_EO"));
var cal_kW_Conference = parseInt(localStorage.getItem("kW_Conference"));
var cal_kW_Bedroom = parseInt(localStorage.getItem("kW_Bedroom"));
var total_load_floor1 = cal_kW_EO + cal_kW_Conference + cal_kW_Bedroom

document.getElementById("Floor1_Total_Load").innerHTML = (total_load_floor1); 
