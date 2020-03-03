// Sensor # WS103001_15
// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("openclosed");

var ref_open_closed_1 = ref_devices_data.child("WS103001");

ref_open_closed_1.on("value", function(snapshot) {
  console.log("Get open_closed_1 from firebase")
  var open_closed_1 = snapshot.val();
  // console.log(open_closed_1)
  // document.getElementById("status_1").innerHTML = open_closed_1["STATUS"];
  // Recheck Device Status from Firebase //
   var Status_open_closed_1 = open_closed_1["STATUS"];
  // console.log(Status_open_closed_1);
   openclosed1_changeImage(Status_open_closed_1)
  // var Status_open_closed_1_Local = localStorage.setItem("Status_open_closed_1_Local", Status_open_closed_1)
});

// Change Image for Open Closed
function openclosed1_changeImage(Status_open_closed_1) {
  var image = document.getElementById('WS103001_15');
  if (Status_open_closed_1 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Sensor # WS103002_16
var ref_open_closed_2 = ref_devices_data.child("WS103002");

ref_open_closed_2.on("value", function(snapshot) {
  console.log("Get open_closed_2 from firebase")
  var open_closed_2 = snapshot.val();
  // console.log(open_closed_1)
  // document.getElementById("status_1").innerHTML = open_closed_1["STATUS"];
  // Recheck Device Status from Firebase //
   var Status_open_closed_2 = open_closed_2["STATUS"];
  // console.log(Status_open_closed_1);
   openclosed2_changeImage(Status_open_closed_2)
  // var Status_open_closed_1_Local = localStorage.setItem("Status_open_closed_1_Local", Status_open_closed_1)
});

// Change Image for Open Closed
function openclosed2_changeImage(Status_open_closed_2) {
  var image = document.getElementById('WS103002_16');
  if (Status_open_closed_2 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}


//<!--
// Sensor # WS103001(15)
//function lightingrow1() {
 // console.log("Hello");
  //
  //console.log("POST method by jQuery");
  //jQuery.ajax({
    // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
  //  url: "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
  //  type: "POST",
  //  headers: {
      // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
   //   "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
  //    "Content-Type": "application/json; charset=utf-8",
  //    "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
  //    "Access-Control-Allow-Methods": "POST",
  //    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  //  },
  //  contentType: "application/json",
  //  data: JSON.stringify({
  //    "topic": "Test post device control",
  //    "type": "devicecontrol",
  //    "message": {
  //      "device": "MSA Device control",
  //      "parameter": {
  //        "status": "on"
  //      }
  //    }
  //  })
  //})
  // When done, Do Next
  //  .done(function (data, textStatus, jqXHR) {
  //    console.log("HTTP Request Succeeded: " + jqXHR.status);
  //    console.log(data);
  //   lightingrow1_changeImage()
  //  })
  //  .fail(function (jqXHR, textStatus, errorThrown) {
  //    console.log("HTTP Request Failed");
  //  })
   // .always(function () {
  //    /* ... */
 //   });
  //
//}


// Change Image Colour From Gray to Yellow Start
//function lightingrow1_changeImage() {
  //var image1_4 = document.getElementById('WS103001(15)');
 
//  if (image1_4.src.match("https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg")) {

  //  image1_4.src = "images/goodbye.jpg";
 

 // } else {
 //   image1_4.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
//  }
//}
// Change Image Colour From Gray to Yellow End


  