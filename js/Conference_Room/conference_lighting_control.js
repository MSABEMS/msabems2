// Row1
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

function lightingrow1_changeImage() {
  // var image1_1 = document.getElementById('row1_1');
  // var image1_2 = document.getElementById('row1_2');
  // var image1_3 = document.getElementById('row1_3');
  var image1_4 = document.getElementById('row1_4');
  var image1_5 = document.getElementById('row1_5');
  var image1_6 = document.getElementById('row1_6');
  var image1_7 = document.getElementById('row1_7');
  var image1_8 = document.getElementById('row1_8');
  var image1_9 = document.getElementById('row1_9');
  // var image2_1 = document.getElementById('row2_1');
  var image2_2 = document.getElementById('row2_2');
  var image2_3 = document.getElementById('row2_3');
  var image2_4 = document.getElementById('row2_4');


  if (image1_4.src.match("https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg")) {
    // image1_1.src = "images/goodbye.jpg";
    // image1_2.src = "images/goodbye.jpg";
    // image1_3.src = "images/goodbye.jpg";
    // image2_1.src = "images/goodbye.jpg";
    image1_4.src = "images/goodbye.jpg";
    image1_5.src = "images/goodbye.jpg";
    image1_6.src = "images/goodbye.jpg";
    image1_7.src = "images/goodbye.jpg";
    image1_8.src = "images/goodbye.jpg";
    image1_9.src = "images/goodbye.jpg";
    
    image2_2.src = "images/goodbye.jpg";
    image2_3.src = "images/goodbye.jpg";
    image2_4.src = "images/goodbye.jpg";

  } else {
    // image1_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    // image1_2.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    // image1_3.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    // image2_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image1_4.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image1_5.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image1_6.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image1_7.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image1_8.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image1_9.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    
    image2_2.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image2_3.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image2_4.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";

  }
}

// Row2
function lightingrow2() {
  console.log("Hello");
  //
  console.log("POST method by jQuery");
  jQuery.ajax({
    // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
    url: "https://cors-anywhere.herokuapp.com/https://hookb.in/G9rlkWNyBaU1m1eBMQZY",
    type: "POST",
    headers: {
      // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
      "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/G9rlkWNyBaU1m1eBMQZY",
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
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      lightingrow2_changeImage()
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");

    })
    .always(function () {
      /* ... */
    });
  //

}
function lightingrow2_changeImage() {
  // var image2_1 = document.getElementById('row2_1');
  // var image2_2 = document.getElementById('row2_2');
  // var image2_3 = document.getElementById('row2_3');
  // var image2_4 = document.getElementById('row2_4');
  var image1_1 = document.getElementById('row1_1');
  var image1_2 = document.getElementById('row1_2');
  var image1_3 = document.getElementById('row1_3');
  var image2_1 = document.getElementById('row2_1');




  if (image1_1.src.match("https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg")) {
    // image2_1.src = "images/goodbye.jpg";
    // image2_2.src = "images/goodbye.jpg";
    // image2_3.src = "images/goodbye.jpg";
    // image2_4.src = "images/goodbye.jpg";
    image1_1.src = "images/goodbye.jpg";
    image1_2.src = "images/goodbye.jpg";
    image1_3.src = "images/goodbye.jpg";
    image2_1.src = "images/goodbye.jpg";
    

  } else {
    image1_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image1_2.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image1_3.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image2_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    // image2_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    // image2_2.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    // image2_3.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    // image2_4.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
  }
}

// Row3
function lightingrow3() {
  console.log("Hello");
  //
  console.log("POST method by jQuery");
  jQuery.ajax({
    // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
    url: "https://cors-anywhere.herokuapp.com/https://hookb.in/G9rlkWNyBaU1m1eBMQZY",
    type: "POST",
    headers: {
      // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
      "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/G9rlkWNyBaU1m1eBMQZY",
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
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      lightingrow3_changeImage()
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });
  //

}
function lightingrow3_changeImage() {
  var image3_1 = document.getElementById('row3_1');
  var image3_2 = document.getElementById('row3_2');


  if (image3_1.src.match("https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg")) {
    image3_1.src = "images/goodbye.jpg";
    image3_2.src = "images/goodbye.jpg";

  } else {
    image3_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image3_2.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
  }
}

// Row4
function lightingrow4() {
  console.log("Hello");
  //
  console.log("POST method by jQuery");
  jQuery.ajax({
    // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
    url: "https://cors-anywhere.herokuapp.com/https://hookb.in/G9rlkWNyBaU1m1eBMQZY",
    type: "POST",
    headers: {
      // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
      "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/G9rlkWNyBaU1m1eBMQZY",
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
    .done(function (data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      lightingrow4_changeImage()
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function () {
      /* ... */
    });
  //

}
function lightingrow4_changeImage() {
  var image4_1 = document.getElementById('row4_1');
  var image4_2 = document.getElementById('row4_2');
  var image4_3 = document.getElementById('row4_3');
  var image4_4 = document.getElementById('row4_4');
  var image4_5 = document.getElementById('row4_5');
  var image4_6 = document.getElementById('row4_6');
  var image4_7 = document.getElementById('row4_7');
  var image4_8 = document.getElementById('row4_8');
  var image4_9 = document.getElementById('row4_9');

  if (image4_1.src.match("https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg")) {
    image4_1.src = "images/goodbye.jpg";
    image4_2.src = "images/goodbye.jpg";
    image4_3.src = "images/goodbye.jpg";
    image4_4.src = "images/goodbye.jpg";
    image4_5.src = "images/goodbye.jpg";
    image4_6.src = "images/goodbye.jpg";
    image4_7.src = "images/goodbye.jpg";
    image4_8.src = "images/goodbye.jpg";
    image4_9.src = "images/goodbye.jpg";

  } else {
    image4_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image4_2.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image4_3.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image4_4.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image4_5.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image4_6.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image4_7.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image4_8.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
    image4_9.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";

  }
}



