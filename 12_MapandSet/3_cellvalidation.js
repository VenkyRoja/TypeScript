var cell1 = "123456789";
var cell2 = "1234567890";
var cell3 = "6++476635312";
var i = 0;
function checkCell(cell) {
    var re = /[0-9]{10}/; //it means any 10 digits
    if (cell.match(re)) {
        console.log("Cell number is valid");
    }
    else {
        console.log("invalid cell number " + cell);
    }
    i++;
    console.log('---- ' + i + ' ----');
}
checkCell(cell1);
checkCell(cell2);
checkCell(cell3);
// function method(a:any):any{
//     return a;
// }
// let num:number = method(10)
