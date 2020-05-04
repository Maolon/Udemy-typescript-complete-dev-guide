import { NumberCollections } from "./NumbersCollection";
import { CharacterCollections } from "./CharacterCollection";

const nc = new NumberCollections([-10, 2, 6, 7, -60, 2, 3, 6, 73, 2]);
nc.sort();
nc.print();

const str = new CharacterCollections(
  "asbcwswerWIKDHKSHFCNXBNmxxcnmbmxsLUSSIWUEGsdf"
);
str.sort();
str.print();
