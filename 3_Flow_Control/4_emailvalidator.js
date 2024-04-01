var email = "test@test.com";
var atPosition = email.indexOf('@');
var dotPosition = email.indexOf('.');
if ((atPosition == -1) || (dotPosition == -1)) {
    console.log("Invalid email ID :" + email);
}
else {
    console.log("Valid email ID :" + email);
}
