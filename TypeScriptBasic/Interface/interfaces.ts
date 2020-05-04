const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true
};

//we can do like this, however the annotation is too long to read
//not a best practice
const printVehicle = (vehicle: {
  name: String;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
};

//an interface is a better choice
interface Vehicle {
  name: String;
  year: number;
  broken: boolean;
}

const printVehicleNew = (vehicle:Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`year: ${vehicle.year}`);
    console.log(`broken: ${vehicle.broken}`);
};

printVehicleNew(oldCivic);

// more complex year
interface newVehicle extends Reportable {
    name: String;
    year: Date;
    broken: boolean;
}

interface Reportable{
    summary():string;
}

  const printSummary = (item:Reportable): void => {
    console.log(item.summary());
};

const newCivic = {
    name: "civic",
    year: new Date(),
    broken: false,
    summary():string {
        return `Name:${this.name}`
    }
  };
  

printSummary(newCivic)


const drinks = {
    color:'brown',
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} grams of sugar`
    }
}

printSummary(drinks)

interface tree {
    height:number;
    name:string;
}

const pineTree:tree = {
    height:1200,
    name:'pine'
}

