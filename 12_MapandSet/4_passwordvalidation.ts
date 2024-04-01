var pwd1 = "te4";
var pwd2 = "test1234";
var pwd3 = "+++++234";
var pwd4 = "Test123456";
var pwd5 = "Test1234";
var pwd6 = "tEsT1234";
var pwd7 = "tE_sT234";
var pwd8 = "tE$T1234";
var pwd9 = "tE%%T1234";

let i:number=0;

function checkPwd(pwd:string):void{
        
    let re:any = /(?=.*[A-Z])\w{4,10}/;;  
    //it means 
    //(a) Maximum of 10 characters
    //(b) Minimum of 4 characters
    //(c) At least one capital letter
    //(d) Underscore or special charatcers are permitted

    if (pwd.match(re)) {
        console.log("Password  is valid")
    } else {
        console.log("invalid password " + pwd)
    }
    i++;
    
    console.log('---- ' + i + ' ----')
}


checkPwd(pwd1);
checkPwd(pwd2);
checkPwd(pwd3);
checkPwd(pwd4);
checkPwd(pwd5);
checkPwd(pwd6);
checkPwd(pwd7);
checkPwd(pwd8);
checkPwd(pwd9);