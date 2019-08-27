// When the user clicks the button, open the modal
function loginButton() {
  // Get the button that opens the modal
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function dismissButton() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function TestLogin() {
  console.log("Login Button Active.");
  location.href = "index.html";

//  POST method by jQuery
//   jQuery.ajax({
//
//       // url: "https://peahub21.azurewebsites.net/api/login/",
//       url: "http://127.0.0.1:8000/api/v2.0/login/",
//       type: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//
//       data: JSON.stringify({
//         "username": document.getElementById("username").value,
//         "password": document.getElementById("password").value
//       })
//     })
//     .done(function(data, textStatus, jqXHR) {
//       console.log("HTTP Request Succeeded: " + jqXHR.status);
//       console.log(data);
//       if (jqXHR.status == 200) {
//         console.log(data['type'])
//         console.log("gggggggg")
//         localStorage.setItem("token", data['token']);
//         localStorage.setItem("comp_id", data['comp_id']);
//         localStorage.setItem("comp_name", data['comp_name']);
//         if (data['type'] == 'PER' || data['type'] == 'LGE') {
//           window.location.replace("c11search.html")
//         } else if (data['type'] == 'PEA') {
//           window.location.replace("p11searchp.html")
//         }
//       }
//     })
//     .fail(function(jqXHR, textStatus, errorThrown) {
//       console.log("HTTP Request Failed");
//     })
//     .always(function() {
//       /* ... */
//     });
//   //
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    console.log("Dismiss Modal");
    modal.style.display = "none";
  }
}
