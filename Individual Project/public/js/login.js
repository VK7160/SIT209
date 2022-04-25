function driverpage() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email == '') {
        console.log("Please enter the E-mail");
    }
    else if (password == '') {
        alert("Please enter the Password");
        console.log("Please enter the Password");
    }
    else if (!filter.test(email)) {
        alert("Enter valid email id.");
        console.log("Enter valid email id.");
    }
    else if (password.length < 6 || password.length > 8) {
        alert("Password min length is 6 and max length is 8.");
        console.log("Password min length is 6 and max length is 8.");
    }
    else {
        alert('Thank You for Login & You are now being redirecting to Pixa Drive - Driver Website');
        // Redirecting to the below page
        window.location = "driver.html";
    }
}

function passengerpage() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email == '') {
        console.log("Please enter the E-mail");
    }
    else if (password == '') {
        alert("Please enter the Password");
        console.log("Please enter the Password");
    }
    else if (!filter.test(email)) {
        alert("Enter valid email id.");
        console.log("Enter valid email id.");
    }
    else if (password.length < 8 || password.length > 8) {
        alert("Password min and max length is 8.");
        console.log("Password min and max length is 8.");
    }
    else {
        alert('Thank You for Login & You are now being redirecting to PixaDrive - Passenger Website');
        // Redirecting to the below page
        window.location = "passenger.html";
    }
}

function clear_Func() {
    //Reset Inputfield code
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}