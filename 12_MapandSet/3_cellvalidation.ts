let cell1:string = "123456789";
let cell2:string = "1234567890";
let cell3:string = "6++476635312";
let i:number=0;

function checkCell(cell:string):void{
        
    let re:any = /[0-9]{10}/;  //it means any 10 digits

    if (cell.match(re)) {
        console.log("Cell number is valid")
    } else {
        console.log("invalid cell number " + cell)
    }
    i++;
    
    console.log('---- ' + i + ' ----')
}


checkCell(cell1);
checkCell(cell2);
checkCell(cell3);


// function method(a:any):any{
//     return a;
// }

// let num:number = method(10)
   