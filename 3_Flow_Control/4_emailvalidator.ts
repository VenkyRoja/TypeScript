
    var email:string = "test@test.com";

    var atPosition:number = email.indexOf('@');

    var dotPosition:number = email.indexOf('.');

    if ((atPosition == -1) || (dotPosition == -1)) {

        console.log("Invalid email ID :" + email)

    } else {

        console.log("Valid email ID :" + email)
    } 

