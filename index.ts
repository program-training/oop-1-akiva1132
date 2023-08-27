// את הקוד שלכם תכתבו כאן
// 3. Shape - צורה

class Shape {
    color: string
    constructor(color: string) {
        this.color = color
    }
    info(): string {
        return 'This is a shape'
    }
    draw(): string {
        return 'drawing a shape'
    }
}

//  1. Rectangle - מלבן
class Rectangle extends Shape {
    height: number;
    width: number;
    color: string
    constructor(height: number, width: number, color: string = "red") {
        super(color)
        this.height = height
        this.width = width
        this.color = color
    }
    scale(height: number = this.height, width: number = this.width, color: string = "red"): void {
        this.height = height
        this.width = width
        this.color = color
    }
    area(): this {
        this.height *= this.width
        return this//.height * this.width
    }
    info(): string {
        return "This is a Recktangle" + " " + this.height
    }
    sumToRectangle(rectangle1: Rectangle, rectangle2: Rectangle): number {
        return Number(rectangle1.info()) + Number(rectangle2.info())
    }
}
let crectanglear1 = new Rectangle(50, 70)
let crectanglear2 = new Rectangle(100, 70)




//2. Square - ריבוע
class Square extends Rectangle {
    constructor(height: number) {
        let width: number = 0
        super(height, width)
    }
    area(): this {
        this.height ** 2
        return this
    }
    info(): string {
        return `This is a Recktangle in color${this.color}, size : ${this.height}`
    }
}
let square1 = new Square(50)
console.log(square1.area());


// 4. Method Chaining
console.log(crectanglear1.area().info());

// 5. Shape with draw method
class Circle extends Shape {
    constructor(color: string) {
        super(color)
    }
    draw(): string {
        return 'drawing a Circle'
    }
}
class Triangle extends Shape {
    constructor(color: string) {
        super(color)
    }
    draw(): string {
        return 'drawing a Triangle'
    }
}
function renderShapes(shapes: Shape[]) {
    shapes.forEach(object => console.log(object.draw())
    )
}