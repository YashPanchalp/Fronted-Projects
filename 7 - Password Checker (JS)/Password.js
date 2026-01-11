let pass = prompt("Enter your password (For Home type 'Home')");

let original = "Yash546";

while ((original != pass)) {

    if (pass === "Home") {
        console.log("Back to Home");

        break;
    }

    pass = prompt("Wrong Password! Please try again")
}

if (original == pass) {
    console.log("Login Succesful!");
}
