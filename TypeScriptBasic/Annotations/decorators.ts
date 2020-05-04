//class decorator
@classDecorator
class Boat {
  color: string = "red";

  //simple decorator
  @testDecorator
  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  //decorator read parameter and catch error
  @logError("Null pilot")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("null");
    }
  }
}

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function logError(errMessage: string) {
  return function (
    target: any,
    key: string,
    discrip: PropertyDescriptor
  ): void {
    const method = discrip.value;
    discrip.value = function () {
      try {
        method();
      } catch (e) {
        console.log("Error: " + errMessage);
      }
    };
  };
}

function classDecorator(constructor: typeof Boat){
    console.log(constructor);
}

new Boat().pilot("fast",true);;
