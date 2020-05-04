const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMkae = [["f150"], ["corolla"], ["camaro"]];

//or
const carsByMake: string[][] = [];

//help with inference when extractin gvlaues
const car1 = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
//wrong
//carMakers.push(100);
//help with map
carMakers.map(
  (car: String): String => {
    return car.toLowerCase();
  }
);

//flexible types
const importantDates: (Date | String)[] = [];
importantDates.push(new Date());
importantDates.push("2030-10-10");
