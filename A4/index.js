function validateForm() {
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
    var validPassword = false;
    var validCountry = false;
    var errorMessages = "";

    var firstName = document.getElementById("FirstName").value;
    if (firstName === "" || firstName.length > 20) {
        errorMessages += "<p>First Name is required and cannot be greater than 20 characters.</p>";
    } else {
        validFirstname = true;
    }

    var lastName = document.getElementById("LastName").value;
    if (lastName === "" || lastName.length > 20) {
        errorMessages += "<p>Last Name is required and cannot be greater than 20 characters.</p>";
    } else {
        validLastname = true;
    }

    var userEmail = document.getElementById("EMail").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email address.</p>";
    } else {
        validEmail = true;
    }

    var phone = document.getElementById("Phone").value;
    var numbers = /^[0-9]+$/;
    if (phone === null || phone === "" || phone.length > 15 || !phone.match(numbers)) {
        errorMessages += "<p>Invalid phone number.</p>";
    } else {
        validPhone = true;
    }

    var password = document.getElementById("Password").value;
    if (password === "" || password.length !== 12) {
        errorMessages += "<p>Password is required and must be 12 characters long.</p>";
    } else {
        validPassword = true;
    }

    var address = document.getElementById("Address").value;
    var city = document.getElementById("City").value;
    var state = document.getElementById("State").value;
    if (address === "" || city === "" || state === "") {
        errorMessages += "<p>Address, City, and State are required fields.</p>";
    }

    var country = document.getElementById("Country").value;
    if (country === "") {
        errorMessages += "<p>Country selection is required.</p>";
    } else {
        validCountry = true;
        if (country === "US") {
            document.getElementById("ZipCode").style.display = "block";
        }
    }

    var errorContainer = document.getElementById("errorMessages");
    errorContainer.innerHTML = errorMessages;

    return (validFirstname && validLastname && validEmail && validPhone && validPassword && validCountry);
}
