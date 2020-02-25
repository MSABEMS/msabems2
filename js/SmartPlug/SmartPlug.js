// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("plug");
var ref_smart_plug_1 = ref_devices_data.child("SP101001");

ref_smart_plug_1.on("value", function(snapshot) {
    console.log("Get smart_plug_1 from firebase")
    var smart_plug_1 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("kW_Plug_1").innerHTML = smart_plug_1["CURRENT"].toFixed(2);
    document.getElementById("V_Plug_1").innerHTML = smart_plug_1["VOLTAGE"];
    document.getElementById("I_Plug_1").innerHTML = smart_plug_1["CURRENT"].toFixed(2);
    // Recheck Device Status from Firebase // 
    var Status_smart_plug_1 = smart_plug_1["STATUS"];
    console.log(Status_smart_plug_1);
    smartplug1_changeImage(Status_smart_plug_1)
    var Status_smart_plug_1_Local = localStorage.setItem("Status_smart_plug_1_Local", Status_smart_plug_1)
  });

// Change Image for Smart Plug
function smartplug1_changeImage(Status_smart_plug_1) {
    var image = document.getElementById('myImage1');
    if (Status_smart_plug_1 == "OFF") {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
    }
}

//  On/Off Smart Plug 1
function smartplug1(devieID_smart_plug_1) {
    console.log("-----Control_Smart_Plug_1-----");
    console.log(devieID_smart_plug_1)
    console.log(localStorage.getItem("Status_smart_plug_1_Local"))
    //
    var Status_smart_plug_1 = localStorage.getItem("Status_smart_plug_1_Local")
    if (Status_smart_plug_1 == "OFF") {
        Status_smart_plug_1 = "ON"
    } else {
        Status_smart_plug_1 = "OFF"
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
            "device_type": "plug",
            "device_id": "plug001",
            "status": Status_smart_plug_1,
        },
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_smart_plug_1_Local = localStorage.setItem("Status_smart_plug_1_Local", Status_smart_plug_1)
            smartplug1_changeImage(Status_smart_plug_1)            
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

// Retrieve data from Firebase for Checking Device Status
var ref_smart_plug_2 = ref_devices_data.child("SP101002");

ref_smart_plug_2.on("value", function(snapshot) {
    console.log("Get smart_plug_2 from firebase")
    var smart_plug_2 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("kW_Plug_2").innerHTML = smart_plug_2["CURRENT"].toFixed(2);
    document.getElementById("V_Plug_2").innerHTML = smart_plug_2["VOLTAGE"];
    document.getElementById("I_Plug_2").innerHTML = smart_plug_2["CURRENT"].toFixed(2);
    // Recheck Device Status from Firebase // 
    var Status_smart_plug_2 = smart_plug_2["STATUS"];
    console.log(Status_smart_plug_2);
    smartplug2_changeImage(Status_smart_plug_2)
    var Status_smart_plug_2_Local = localStorage.setItem("Status_smart_plug_2_Local", Status_smart_plug_2)
  });

// Change Image for Smart Plug
function smartplug2_changeImage(Status_smart_plug_2) {
    var image = document.getElementById('myImage2');
    if (Status_smart_plug_2 == "OFF") {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
    }
}

//  On/Off Smart Plug 2
function smartplug2(devieID_smart_plug_2) {
    console.log("-----Control_Smart_Plug_2-----");
    console.log(devieID_smart_plug_2)
    console.log(localStorage.getItem("Status_smart_plug_2_Local"))
    //
    var Status_smart_plug_2 = localStorage.getItem("Status_smart_plug_2_Local")
    if (Status_smart_plug_2 == "OFF") {
        Status_smart_plug_2 = "ON"
    } else {
        Status_smart_plug_2 = "OFF"
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
        data: JSON.stringify({
            "device_type": "plug",
            "device_id": "plug002",
            "status": Status_smart_plug_2,
        })
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_smart_plug_2_Local = localStorage.setItem("Status_smart_plug_2_Local", Status_smart_plug_2)
            smartplug2_changeImage(Status_smart_plug_2)            
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}