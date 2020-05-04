const add = (a: number, b: number): number => {
  return a + b;
};
//wrong : without a return annotation, typescript will not notice the fault
//thats why even typescirpt can interfer return type of function 
//a better practice is to add the annotation
const subtract = (a: number, b: number) => {
  a - b;
};
// other form of funciton
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};
//but actually it can return/undefined null
const logger = (message: string): void => {
  console.log(message);
  return null;
};

//never
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
