var hello = function (name) {
    return "Hello " + name;
};
function add(num1, num2) {
    return num1 + num2;
}
function calculator1(fun) {
    console.log(fun(10, 20));
}
function calculator2() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
function display(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
//console.log(hello("Rama Raj"));
//console.log(hello("Vishnu"));
//console.log("Sum is: " + add(10,20));
//display(1,"Sri Ranga","Admin");
console.log(calculator1(add));
//console.log(calculator2()(20,5));
