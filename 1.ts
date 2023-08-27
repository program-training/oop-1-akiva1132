class Car {
    color: string;
    model: string;
    km: number;
    constructor111(color: string, model: string, km: number) {
        this.color = color;
        this.model = model;
        this.km = km;
    }
    drive(): void {
        this.km += 10;
    }
    getCarData(): string {
        return `A ${this.model} ${this.color} car with ${this.km} kilometers`
    }
}
let car = new Car()