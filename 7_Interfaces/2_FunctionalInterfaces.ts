interface Addition {
    (x:number, y:number):void
}

interface Subtraction {
    (x:number, y:number):number
}

var add: Addition;

var sub: Subtraction;

add=(x:number, y:number):void => {
    console.log("addition = ", x+y)
}

sub=(a:number, b:number):number => {
    return a-b;
}

add(5,8);
console.log(sub(20,7));