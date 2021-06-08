class Developer {
    constructor(_name) {
        this.Name = _name;
        this.type = "Developer"
    }

}
class Tester {
    constructor(_name) {
        this.Name = _name;
        this.type = "Tester"
    }
}
function factoryEmployeess() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;

        }

    }
}

function PrintData() {
    console.log(`hi iam ${this.Name} work as ${this.type}`);
}
const Emps =new factoryEmployeess();
PrintData.call(Emps.create("Nadia",1));
PrintData.call(Emps.create("Ahmed",2));

//Factory method for creating new shape instances
function shapeFactory(){
    this.createShape = function (shapeType) {
 
        var shape;
        switch(shapeType){
            case "rectangle":
                shape = new Rectangle();
                break;
            case "square":
                shape = new Square();
                break;
            case "circle":
                shape = new Circle();
                break;    
            default:
                shape = new Rectangle();
                break;
        }
        return shape;
    }
}
 
// Constructor for defining new Rectangle
var Rectangle = function () {
    this.draw = function () {
        console.log('This is a Rectangle');
    }
};
 
// Constructor for defining new Square
var Square = function () {
    this.draw = function () {
        console.log('This is a Square');
    }
};
 
// Constructor for defining new Circle
var Circle= function () {
    this.draw = function () {
        console.log('This is a Circle');
    }
};
 
var factory = new shapeFactory();
//Creating instance of factory that makes rectangle,square,circle respectively
var rectangle = factory.createShape('rectangle');
var square = factory.createShape('square');
var circle= factory.createShape('circle');
 
rectangle.draw();
square.draw();
circle.draw();
 
/*
  OUTPUT
  
  This is a Rectangle
  This is a Square
  This is a Circle
 
*/