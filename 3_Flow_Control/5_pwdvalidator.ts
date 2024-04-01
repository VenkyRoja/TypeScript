// Rule: Password should begin with a capital letter.

var pwd:string = "Test@123";

if ((pwd.charCodeAt(0) >= 65) && (pwd.charCodeAt(0) >= 90)) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}