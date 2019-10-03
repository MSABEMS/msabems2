// On
function turn_on_ac() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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
            turn_on_ac1_changeImage()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

function turn_on_ac1_changeImage() {
    document.getElementById('ac1').src = 'https://www.fotoaparatas.lt/images/thumbs/thumb-3-55x30m-green-screen-349177-640-448.png'
}

// Off
function turn_off_ac() {
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
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            turn_off_ac1_changeImage()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

function turn_off_ac1_changeImage() {
    document.getElementById('ac1').src = 'images/goodbye.jpg'
}

// Submit Temp
function TestLogin() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}





// CoolModeControl
function CoolModeControl() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

// DryModeControl
function DryModeControl() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

// FenModeControl
function FenModeControl() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

//Swing turn_off_ac
function swingturn_off_ac() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

//Swing turn_on_ac
function swingturn_on_ac() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

// Speed Fan
function speedone() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}
function speedtwo() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}
function speedthree() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}
function speedfour() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}
function speedfive() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/eKVMqQWYOMuG8GR3zd08",
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

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}




