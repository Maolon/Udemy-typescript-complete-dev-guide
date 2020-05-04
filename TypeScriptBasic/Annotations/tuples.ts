const drink = {
  clor: "brown",
  carbonated: true,
  sugar: 40
};

//wrong ，we dont want to do this
const pepsi = ["brown", true, 40];
pepsi[0] = 40;
pepsi[2] = "brown";

//so a tuple is needed
const pespi: [string, boolean, number] = ["brown", true, 40];

//or type alias
type Drink = [string, boolean, number];

const coca: Drink = ["brown", true, 50];

//why we dont use tuple
//we dont know what does 400 and 3354 mean
const carSpecs: [number, number] = [400, 3354];

//use object instead

const carStates = {
  horsePower: 400,
  weight: 3354
};
