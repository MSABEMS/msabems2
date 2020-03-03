// Home Start
function projectorsource_home(device_id) {
    console.log("projectorsource_home clicked: " + device_id);
    console.log(device_id)
    //
    console.log("POST projectorsource_home method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": "HOME",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}
// Home End

// Source Start
function projectorsource_source(device_id) {
    console.log("projectorsource_source clicked: " + device_id);
    console.log(device_id)
    //
    console.log("POST projectorsource_source method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": "HOME",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}
// Source End

// setting Start
function projectorsource_setting() {
    console.log("projectorsource_setting clicked: " + device_id);
    console.log(device_id)
    //
    console.log("POST projectorsource_setting method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": "MENU",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}
// setting End

// Back Start
function projectorsource_back(device_id) {
    console.log("projectorsource_back clicked: " + device_id);
    console.log(device_id)
    //
    console.log("POST projectorsource_back method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": "BACK",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });

}
// Back End

// Left Start
function projectorsource_left(device_id) {
    console.log("projectorsource_left clicked: " + device_id);
    console.log(device_id)
    //
    console.log("POST projectorsource_left method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": "LEFT",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}
// Left End

// Up Start
function projectorsource_up(device_id) {
    console.log("projectorsource_up clicked: " + device_id);
    console.log(device_id)
    //
    console.log("POST projectorsource_up method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": "UP",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}
// Up End

// Enter Start
function projectorsource_enter(device_id) {
    console.log("projectorsource_enter clicked: " + device_id);
    console.log(device_id)
    //
    console.log("POST projectorsource_enter method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": "ENTER",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}
// Enter End

// Down Start
function projectorsource_down(device_id) {
    console.log("projectorsource_down clicked: " + device_id);
    console.log(device_id)
    //
    console.log("POST projectorsource_down method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": "DOWN",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}
// Down End

// Right Start
function projectorsource_right(device_id) {
    console.log("projectorsource_right clicked: " + device_id);
    console.log(device_id)
    //
    console.log("POST projectorsource_right method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": "RIGHT",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}
// Right End

// Update projector status with Firebase
// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("projector");
var ref_projector_device = ref_devices_data.child("xxxxxx");

ref_projector_device.on("value", function(snapshot) {
    console.log("Get projector status from firebase")
    var projector_device = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("xxx").innerHTML = projector_device["STATUS"];
    // Recheck Device Status from Firebase // 
    var Status_projector_device = projector_device["STATUS"];
    console.log(Status_projector_device);
    Projector_device_changeImage(Status_projector_device)
    var Status_projector_device_Local = localStorage.setItem("Status_projector_device_Local", Status_projector_device)
  });

// Change Image for Smart Plug
function Projector_device_changeImage(Status_projector_device) {
    var image = document.getElementById('myImage');

  if (Status_projector_device == "OFF") {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
      }
}

//  On/Off Lighting Row 1
function control_projector(device_id) {
    console.log("-----Control_projector-----");
    console.log(device_id)
    console.log(localStorage.getItem("Status_projector_device_Local"))
    //
    var Status_projector_device = localStorage.getItem("Status_projector_device_Local")
    if (Status_projector_device == "OFF") {
        Status_projector_device = "ON"
    } else {
        Status_projector_device = "OFF"
    }
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "projector",
            "device_id": device_id,
            "status": Status_projector_device,
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_projector_device_Local = localStorage.setItem("Status_projector_device_Local", Status_projector_device)
            Projector_device_changeImage(Status_projector_device)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

function changeImage_power() {
    var image = document.getElementById('myImage');
    if (image.src.match("images/remodeair/switchon")) {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
    }
}
// Power End

