import { Comparable } from "./Comparable";
import { Sorter } from "./Sorter";

export class CharacterCollections extends Sorter<string>
  implements Comparable<string> {
  public length: number;
  constructor(public collection: string) {
    super();
    this.length = collection.length;
  }

  compare(a: string, b: string) {
    if (
      a.toLowerCase() > b.toLowerCase() ||
      (a.toLowerCase() === b.toLowerCase() && a < b)
    )
      return 1;
    else if (a === b) return 0;
    else return -1;
  }

  swap(i: number, j: number) {
    if (!this.isIndexValid(i) || !this.isIndexValid(j))
      throw new Error("Invalid Index");
    const characters = this.collection.split("");
    let tmp = characters[i];
    characters[i] = characters[j];
    characters[j] = tmp;
    this.collection = characters.join("");
  }

  get(i: number): string {
    if (!this.isIndexValid(i)) throw new Error("Invalid Index");
    return this.collection.charAt(i);
  }

  private isIndexValid(i: number): boolean {
    if (i >= 0 && i < this.length) return true;
    else return false;
  }

  getCollection(): string {
    return this.collection;
  }

  print() {
    console.log(this.collection);
  }
}
