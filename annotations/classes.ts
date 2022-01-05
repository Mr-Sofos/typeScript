class Vehicle {
  // public drive(): void {
  //   console.log("I'm driving");
  // }

  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  public stop(): void {
    console.log("I'm stopping");
  }

  protected beep(): void {
    console.log('beeeeeep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("I'm driving and I'm a car");
  }

  startDrivingProcess(): void {
    this.drive();
    this.beep();
  }
}

const vehicle = new Vehicle('black');
// vehicle.drive();
// vehicle.stop();
// vehicle.beep();
console.log(vehicle.color);

const car = new Car(4, 'silver');
// car.startDrivingProcess();
// car.stop();
// car.beep();
