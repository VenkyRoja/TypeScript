

let a = prompt("Enter a number");
if (a != null) {
    let x:number = parseFloat(a);
    console.log(x+3);
}
 
var courses = ["Angular", "React", "Express"];
console.log(courses);
var s2:string = courses.toString();
console.log(s2);

console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.charAt(7));
console.log(s2.charAt(8));
console.log(s2.charAt(9));
console.log(s2.indexOf('n'));
console.log(s2.lastIndexOf('a'));

var mybool = false;
var y = mybool.toString();
console.log(y);
s2 = y;

console.log(s2.length);
console.log(s2.charAt(0));
console.log(s2.indexOf('n'));
console.log(s2.lastIndexOf('a'));