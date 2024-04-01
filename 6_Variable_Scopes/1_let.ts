function myFun():void{

    var i = 44;
    console.log(i);

    for(let i=0; i < 10; i++){
        console.log(i);
        //i has the scope only in this block because of let prefix.
    }
    //console.log(i);  //Error: Can not find name i, scope of is not effective here beause of let prefis
    console.log(i);

    var i = 33;
    console.log(i);

    //let : block scope
    //var : function scope
}

myFun();