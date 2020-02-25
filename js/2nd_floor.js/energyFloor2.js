// Retrieve data from Firebase
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter");
var ref_kW_OfficeRoom_1 = ref_indoor.child("F2OFF1");
var ref_kW_OfficeRoom_2 = ref_indoor.child("F2OFF2");
var ref_kW_MainControl = ref_indoor.child("F2MAIN");
var ref_kW_CriLoad = ref_indoor.child("F2CRI");

ref_kW_OfficeRoom_1.on("value", function(snapshot) {
    console.log("Get kW_EO from firebase")
    //  console.log(snapshot.val());
    var OfficeRoom_1 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("OfficeRoom_1").innerHTML = OfficeRoom_1;
    var OfficeRoom_1_local = localStorage.setItem("OfficeRoom_1", OfficeRoom_1)
  });

ref_kW_OfficeRoom_2.on("value", function(snapshot) {
    console.log("Get kW_EO from firebase")
    //  console.log(snapshot.val());
    var OfficeRoom_2 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("OfficeRoom_2").innerHTML = OfficeRoom_2;
    var OfficeRoom_2_local = localStorage.setItem("OfficeRoom_2", OfficeRoom_2)
});

ref_kW_MainControl.on("value", function(snapshot) {
    console.log("Get kW_EO from firebase")
    //  console.log(snapshot.val());
    var MainControl = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("MainControl").innerHTML = MainControl;
    var MainControl_local = localStorage.setItem("MainControl", MainControl)
  });

ref_kW_CriLoad.on("value", function(snapshot) {
    console.log("Get kW_EO from firebase")
    //  console.log(snapshot.val());
    var CriLoad = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("CriLoad").innerHTML = CriLoad;
    var CriLoad_local = localStorage.setItem("CriLoad", CriLoad)
});

var OfficeRoom_1 = parseInt(localStorage.getItem("OfficeRoom_1"));
var OfficeRoom_2 = parseInt(localStorage.getItem("OfficeRoom_2"));
var MainControl = parseInt(localStorage.getItem("MainControl"));
var CriLoad = parseInt(localStorage.getItem("CriLoad"));
var total_load_floor2 = OfficeRoom_1 + OfficeRoom_2 + MainControl + CriLoad

document.getElementById("Floor2_Total_Load").innerHTML = (total_load_floor2); 
