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
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
      if (event.target == modal) {
        console.log("Dismiss Modal");
        modal.style.display = "none";
      }
    }
