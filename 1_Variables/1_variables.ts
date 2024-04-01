
//-- number --------
var n1:number = 10;

console.log(n1);

//-- string --------
var s1:string = "you are the master of your desyiny";   // double quotes "
var s2:string = 'Rama Rama Rama' // single quotes '
var s3:string = `all pwer is within you, you can do anything and everything` //back tick symbol `

console.log(s1);
console.log(s2);
console.log(s3);

//-- boolean --------
var b1 = true;
var b2 = false;

console.log(b1);
console.log(b2);

//-- JSON Object --------
var a1 = {
    productId: 1,
    productName: "iPhone 15",
    productPrice: 599
};
console.log(a1);

//--- Array ----------
var array1 = ["AngularJS", "ReactJS", "NodeJS"]; 

console.log(array1);
console.log(array1[0]);
console.log(array1.length);

var array2 = [123, "AngularJS", true];
console.log(array2);

var array3:Array<string> = ["Rama", "Krishna", "Siva"]; 
console.log(array3);

var array4:Array<any> = [123, "Angular JS", true, {name: "krishna", id: 973}, a1];
console.log(array4);