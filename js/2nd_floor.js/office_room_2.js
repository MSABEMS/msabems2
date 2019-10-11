// Office Room 1 Welcome Start
function or2_welcome() {
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
            or2_welcome_changeImage()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}
function or2_welcome_changeImage() {
    document.getElementById('or2').src = 'https://www.agricar.co.uk/uploads/images/products/large/agricar-new-holland-bright-yellow-87295405-1539606274yy.png'
}
// Office Room 1 Welcome End


// Office Room 2 Goodbye Start
function or2_goodbye() {
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
            or2_goodbye_changeImage()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

function or2_goodbye_changeImage() {
    document.getElementById('or2').src = 'images/goodbye.jpg'
}
// Office Room 2 Goodbye End