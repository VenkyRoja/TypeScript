interface Product{
    id:number;
    name:string;
    description:string;
    price?:number;
    
    display():void;
}

var product1:Product = {
    id:123,
    name:"iPhone15",
    description:"Its awesome",
    
    display():void {
        console.log(this.id + " " + this.name);
        console.log(this.description);
    }
}


var product2:Product = {
    id:123,
    name:"iPhone4",
    description:"Its good",
    
    display():void {
        console.log(this.id + " " + this.name);
    }
}

product1.display();
product2.display();