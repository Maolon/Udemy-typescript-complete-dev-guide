import { Comparable } from "./Comparable";
import { Sorter } from "./Sorter";

export class NumberCollections extends Sorter<number> implements Comparable<number> {
  public length: number;
  constructor(public collection: number[]) {
    super();
    this.length = collection.length;
    
  }

  compare(a: number, b: number) {
    if (a > b) return 1;
    else if (a === b) return 0;
    else return -1;
  }

  swap(i: number, j: number) {
    if (!this.isIndexValid(i) || !this.isIndexValid(j)) throw new Error("Invalid Index: swap("+i+","+j+")");
    let tmp = this.collection[i];
    this.collection[i] = this.collection[j];
    this.collection[j] = tmp;
  }

  get(i: number): number {
    if (!this.isIndexValid(i)) throw new Error("Invalid Index: get("+i+")");
    return this.collection[i];
  }

  getCollection():number[]{
    return this.collection;
  }

  print():void{
    console.log(this.collection)
  }

  private isIndexValid(i: number): boolean {
    if (i >= 0 && i < this.length) return true;
    else return false;
  }
}
