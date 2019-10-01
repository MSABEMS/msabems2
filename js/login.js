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
  // console.log("Login Button Active.");
  // location.href = "index.html";

  //  POST method by jQuery
  console.log("POST method by jQuery");
  jQuery.ajax({

      url: "https://cors-anywhere.herokuapp.com/https://hookb.in/G9rlkWNyBaU1m1eBMQZY",
      type: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/G9rlkWNyBaU1m1eBMQZY",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",  
      },

      data: JSON.stringify({
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value
      })
    })
    .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data);
      if (jqXHR.status == 200) {
        // console.log(data['type']);
        console.log("Login successful.");
        // localStorage.setItem("token", data['token']);
        // window.location.replace("index.html");
        console.log("Login successful Hahahaah")
      }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
    })
    .always(function() {
      /* ... */
    });
  //
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    console.log("Dismiss Modal");
    modal.style.display = "none";
  }
}
