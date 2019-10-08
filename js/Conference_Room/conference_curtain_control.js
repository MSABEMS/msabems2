// All Close
function curtain_close() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/OeZ0BBGoNjsyVylW6bVN",
        type: "POST",
        headers: {
          // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
          "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/OeZ0BBGoNjsyVylW6bVN",
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
      .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
      })
      .always(function() {
        /* ... */
      });
    //
  
  }

// All Open
function curtain_open() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/OeZ0BBGoNjsyVylW6bVN",
        type: "POST",
        headers: {
          // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
          "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/OeZ0BBGoNjsyVylW6bVN",
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
      .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
      })
      .always(function() {
        /* ... */
      });
    //
  
  }

// All Pause
function curtain_pause() {
  console.log("Hello");
  //
  console.log("POST method by jQuery");
  jQuery.ajax({
      // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
      url: "https://cors-anywhere.herokuapp.com/https://hookb.in/pz69q7DXwkU3b3qV0wgo",
      type: "POST",
      headers: {
        // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
        "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/pz69q7DXwkU3b3qV0wgo",
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
    .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function() {
      /* ... */
    });
  //

}

