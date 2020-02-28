// Retrieve data from Firebase
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter");
var ref_kW_Lighting_2 = ref_indoor.child("F2L2")
var ref_kW_Outlet_2 = ref_indoor.child("F2O2")
var ref_kW_Aircon_2 = ref_indoor.child("F2AC2")
var ref_kW_CriLoad = ref_indoor.child("F2CRI");

ref_kW_Lighting_2.on("value", function(snapshot) {
    console.log("Get kW_Lighting_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Lighting_2 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Lighting_2").innerHTML = kW_Lighting_2;
    var kW_Lighting_2_local = localStorage.setItem("kW_Lighting_2", kW_Lighting_2)
  });

ref_kW_Outlet_2.on("value", function(snapshot) {
    console.log("Get kW_Outlet_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Outlet_2 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Outlet_2").innerHTML = kW_Outlet_2;
    var kW_Outlet_2_local = localStorage.setItem("kW_Outlet_2", kW_Outlet_2)
});

ref_kW_Aircon_2.on("value", function(snapshot) {
    console.log("Get kW_Aircon_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Aircon_2 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Aircon_2").innerHTML = kW_Aircon_2;
    var kW_Aircon_2_local = localStorage.setItem("kW_Aircon_2", kW_Aircon_2)
});

ref_kW_CriLoad.on("value", function(snapshot) {
    console.log("Get kW_EO from firebase")
    //  console.log(snapshot.val());
    var CriLoad = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("CriLoad").innerHTML = CriLoad;
    var CriLoad_local = localStorage.setItem("CriLoad", CriLoad)
});

var cal_kW_Lighting_1 = parseInt(localStorage.getItem("kW_Lighting_1"));
var cal_kW_Outlet_1 = parseInt(localStorage.getItem("kW_Outlet_1"));
var cal_kW_kW_Aircon_1 = parseInt(localStorage.getItem("kW_Aircon_1"));
var CriLoad = parseInt(localStorage.getItem("CriLoad"));
var total_load_floor2 = cal_kW_Lighting_2 + cal_kW_Outlet_2 + cal_kW_Aircon_2 + CriLoad

document.getElementById("Floor2_Total_Load").innerHTML = (total_load_floor2);
