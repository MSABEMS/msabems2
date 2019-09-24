// Lighting Low 1
function lighting_row1() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/PxPd1ay3aOh0j0WBzJEm",
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
            lighting_row1_changeImage()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}
function lighting_row1_changeImage() {
    var image1_1 = document.getElementById('eorow1_1');
    var image1_2 = document.getElementById('eorow1_2');
    var image1_3 = document.getElementById('eorow1_3');

    if (image1_1.src.match("https://thumbs.dreamstime.com/t/lights-garland-abstract-blurred-led-light-orange-lighting-bokeh-yellow-perspective-as-explosion-rays-62413661.jpg")) {
        image1_1.src = "images/goodbye.jpg";
        image1_2.src = "images/goodbye.jpg";
        image1_3.src = "images/goodbye.jpg";

    } else {
        image1_1.src = "https://thumbs.dreamstime.com/t/lights-garland-abstract-blurred-led-light-orange-lighting-bokeh-yellow-perspective-as-explosion-rays-62413661.jpg";
        image1_2.src = "https://thumbs.dreamstime.com/t/lights-garland-abstract-blurred-led-light-orange-lighting-bokeh-yellow-perspective-as-explosion-rays-62413661.jpg";
        image1_3.src = "https://thumbs.dreamstime.com/t/lights-garland-abstract-blurred-led-light-orange-lighting-bokeh-yellow-perspective-as-explosion-rays-62413661.jpg";
    }
}


// Lighting Low 2
function lighting_row2() {
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
            lighting_row2_changeImage()

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

function lighting_row2_changeImage() {
    var image1_1 = document.getElementById('eorow2_1');
    var image1_2 = document.getElementById('eorow2_2');
    var image1_3 = document.getElementById('eorow2_3');

    if (image1_1.src.match("https://thumbs.dreamstime.com/t/lights-garland-abstract-blurred-led-light-orange-lighting-bokeh-yellow-perspective-as-explosion-rays-62413661.jpg")) {
        image1_1.src = "images/goodbye.jpg";
        image1_2.src = "images/goodbye.jpg";
        image1_3.src = "images/goodbye.jpg";

    } else {
        image1_1.src = "https://thumbs.dreamstime.com/t/lights-garland-abstract-blurred-led-light-orange-lighting-bokeh-yellow-perspective-as-explosion-rays-62413661.jpg";
        image1_2.src = "https://thumbs.dreamstime.com/t/lights-garland-abstract-blurred-led-light-orange-lighting-bokeh-yellow-perspective-as-explosion-rays-62413661.jpg";
        image1_3.src = "https://thumbs.dreamstime.com/t/lights-garland-abstract-blurred-led-light-orange-lighting-bokeh-yellow-perspective-as-explosion-rays-62413661.jpg";
    }
}

// Lighting Low 3
function lighting_row3() {
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
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}
