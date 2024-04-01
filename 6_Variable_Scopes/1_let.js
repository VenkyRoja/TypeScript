function myFun() {
    var i = 44;
    console.log(i);
    for (var i_1 = 0; i_1 < 10; i_1++) {
        console.log(i_1);
        //i has the scope only in this block because of let prefix.
    }
    //console.log(i);  //Error: Can not find name i, scope of is not effective here beause of let prefis
    console.log(i);
    var i = 33;
    console.log(i);
}
myFun();
