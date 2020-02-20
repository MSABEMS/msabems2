// Retrieve data from Firebase -> Outdoor



// Retrieve data from Firebase -> Indoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("multisensor").child("MS202001");
var ref_temp = ref_indoor.child("TEMPERATURE")
var ref_hum = ref_indoor.child("HUMIDITY")

ref_temp.on("value", function(snapshot) {
  console.log("Get temp from firebase")
  //  console.log(snapshot.val());
  var temp_server = snapshot.val();
  // console.log("Temp is " + temp_server);
  document.getElementById("temp_serverroom").innerHTML = temp_server;
});

ref_hum.on("value", function(snapshot) {
  console.log("Get hum from firebase")
  // console.log(snapshot.val());
  var hum_server = snapshot.val();
  document.getElementById("hum_serverroom").innerHTML = hum_server;
});