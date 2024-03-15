var today = new Date();
var year = today.getFullYear();
var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;
  
    var errorMessage = "";
  
    if (name === "") {
      errorMessage = "Please enter your name.";
    } else if (email === "") {
      errorMessage = "Please enter your email address.";
    } else if (comments === "") {
      errorMessage = "Please enter your comments.";
    }
  
    if (errorMessage !== "") {
      alert(errorMessage);
      return false;
    } else {
      return true;
    }
  }
