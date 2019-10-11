// Sensor # WS103001(15)
function lightingrow1() {
  console.log("Hello");
  //
  console.log("POST method by jQuery");
  jQuery.ajax({
    // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
    url: "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
    type: "POST",
    headers: {
      // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
      "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
    contentType: "application/json",
    data: JSON.stringify({
      "topic": "Test post device control",
      "type": "devicecontrol",
      "message": {
        "device": "MSA Device control",
        "parameter": {
          "status": "on"
        }
      }
    })
  })
  // When done, Do Next
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      lightingrow1_changeImage()
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });
  //
}


// Change Image Colour From Gray to Yellow Start
function lightingrow1_changeImage() {
  var image1_4 = document.getElementById('WS103001(15)');
 
  if (image1_4.src.match("https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg")) {

    image1_4.src = "images/goodbye.jpg";
 

  } else {
    image1_4.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
  }
}
// Change Image Colour From Gray to Yellow End


  