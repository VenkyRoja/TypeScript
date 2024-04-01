var myCar = {
    make: "Honda",
    model: "Civic",
    year: 2018,
    color: "Black",
    numOfDoors: 4,
    seats: 4,
    auto: true,
    ShowDetails: function () {
        console.log("Car details: " + this.make + " " + this.model + " Year " + this.year);
        console.log("Exterior features are " + this.color + " color,  Number of doors = " + this.numOfDoors);
        console.log("Interior features are " + this.seats + " seater, Auto = " + this.auto);
    }
};
myCar.ShowDetails();
