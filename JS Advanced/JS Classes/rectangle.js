class Reactangle {
    constructor(height,widht,color) {
        this.height = height;
        this.widht = widht;
        this.color = color;

    }
    calcArea() {
        return this.widht * this.height;
    }
}

let reactangle = new Reactangle(12,18,'red');
console.log(reactangle.calcArea());
