var x:number = 10;
var y:number = 20;
var z:number = 30;

console.log('x = ' + x + ' y = ' + y + ' z = ' + z );

if(x > y && x > z){
    console.log("x is greater");
}else if(y > x && y > z){
    console.log("y is greater");
}else if(z > x && z > y){
    console.log("z is greater");
}else{
    console.log("Given numbers are equal");
}