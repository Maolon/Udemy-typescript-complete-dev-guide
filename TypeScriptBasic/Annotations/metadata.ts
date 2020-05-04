import "reflect-metadata";

const plane = {
  color: "red",
};

//add a new metadata to object plane
Reflect.defineMetadata("note", "sth", plane);

//cannot see note from console.log
console.log(plane);

const note = Reflect.getMetadata("note", plane);
// now we can see note
console.log(note);

//also we can add metadata to a property
Reflect.defineMetadata("newnote", "more things", plane, "color");

const newnote = Reflect.getMetadata("newnote", plane, "color");

console.log(newnote);

@printMarkedMetadata
class NewPlane {
  color: string = "red";

  @markFunction(true)
  fly(): void {
    console.log("flying");
  }
}

//also can be applied to a function
function markFunction(isMarked: boolean) {
  return function (target: NewPlane, key: string) {
    Reflect.defineMetadata("marked", isMarked, target, key);
  };
}

function printMarkedMetadata(target: typeof NewPlane){
    for( let key in target.prototype){
        const marked = Reflect.getMetadata('marked', target.prototype, key);
        console.log(marked);
    }
}