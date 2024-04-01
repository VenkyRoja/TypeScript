var product1 = {
    id: 123,
    name: "iPhone15",
    description: "Its awesome",
    display: function () {
        console.log(this.id + " " + this.name);
        console.log(this.description);
    }
};
var product2 = {
    id: 123,
    name: "iPhone4",
    description: "Its good",
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
product1.display();
product2.display();
