interface Exterior{
    color: string;
    numOfDoors: number;
}

interface Interior{
    seats: number;
    auto: boolean;
}

interface Car extends Exterior,Interior{
    make: string;
    model: String;
    year: number;

    ShowDetails():void;
}

var myCar: Car = {
    make:"Honda",
    model:"Civic",
    year:2018,
    color:"Black",
    numOfDoors:4,
    seats:4,
    auto:true,

    ShowDetails() {
        console.log("Car details: " + this.make + " " + this.model + " Year " + this.year)
        console.log("Exterior features are " + this.color + " color,  Number of doors = " + this.numOfDoors)
        console.log("Interior features are " + this.seats + " seater, Auto = " + this.auto)
    }
}

myCar.ShowDetails();