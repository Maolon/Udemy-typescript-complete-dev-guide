class Vehicle {
  color: string = "red";

  constructor(cor: string) {
    this.color = cor;
  }
  //short version
  //constructor(public cor:string){} equal to all lines above

  public honk(): void {
    console.log("beep");
  }

  protected yiled(): void {}
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vooom");
  }

  startDriving(): void {
    this.drive();
    this.yiled();
  }
}

const car = new Car(4,"orange");
console.log(car.color);
car.startDriving();
car.honk();

//wrong you can access protected in child class but cannot access it in any instance
const newcar = new Vehicle("red");
//wrong cannt do that
// newcar.yield();
