var product = function (x, y) {
    var nums = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        nums[_i - 2] = arguments[_i];
    }
    console.log("---------------------");
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(i + ")  " + nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
console.log(product(2, 3, 1, 2, 3, 4, 5));
console.log(product(1, 2, 9, 9, 19, 19, 2, 2, -2, 2, 2));
