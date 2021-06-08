class Polygon {
    width = 3;
    height = 7;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Polygon {
    constructor(width, height) {
        super(width, height);
    }
    toString() {
        return `Width: ${this.width}, Height: ${this.height}, Area: ${this.calcArea()}`;
    }
    draw() {
        var c = document.getElementById("rect");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, this.width, this.height);
        ctx.stroke();
    }
}
class Square extends Polygon {
    constructor(side) {
        super(side, side);
    }
    toString() {
        return `Side: ${this.width}, Area: ${this.calcArea()}`;
    }
    draw() {
        var c = document.getElementById("sqr");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(5, 20, this.width, this.width);
        ctx.stroke();
    }
}
class Circle{
    constructor(radius) {
        this.radius = radius;
    }
    calcArea() {
        return this.radius * this.radius * Math.PI;
    }
    toString() {
        return `Radius: ${this.radius}, Area: ${this.calcArea()}`;
    }
    draw() {
        var c = document.getElementById("crc");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(100, 100, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
class Triangle extends Polygon {
    constructor(base, height) {
        super(base, height);
    }
    calcArea() {
        return this.width * this.height / 2;
    }
    toString() {
        return `Base: ${this.width}, Height: ${this.height}, Area: ${this.calcArea()}`;
    }
    draw() {
        var c = document.getElementById("tri");
        var ctx = c.getContext("2d");
        var x = 50;
        var y = 150;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - this.height);
        ctx.lineTo(x + this.width, y);
        ctx.closePath();
        ctx.stroke();
    }
}

let rect = new Rectangle(100, 60);
rect.draw()

let sqr = new Square(75);
sqr.draw()

let crc = new Circle(50);
crc.draw()

let tri = new Triangle(70, 100);
tri.draw()