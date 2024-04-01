var product = function(x:number,y:number,...nums:number[]){
    console.log("---------------------");

    var result = 1;

    for(var i=0; i < nums.length; i++){
        console.log(i + ")  " + nums[i]);
        result *= nums[i];
    }
    return result;

}

console.log(product(2,3,4,5));
console.log(product(2,3,1,2,3,4,5));
console.log(product(1,2,9,9, 19, 19, 2,2, -2, 2, 2));