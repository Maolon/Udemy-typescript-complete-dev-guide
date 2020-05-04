import { Comparable } from "./Comparable";


// a quicksorter, able to sorting numbers string(in alphabet)
export abstract class Sorter<T> {
  abstract length: number;

  abstract getCollection(): any;

  abstract print(): void;

  abstract get(i: number): T;

  abstract compare(a: T, b: T): number;

  abstract swap(index1: number, index2: number): void;

  sort(): void {
    this.qsort(0, this.length - 1);
  }

  private qsort(lo: number, hi: number): void {
    if (lo < hi) {
      let pi = this.partition(lo, hi);
      this.qsort(lo, pi - 1);
      this.qsort(pi + 1, hi);
    }
  }

  private partition(lo: number, hi: number): number {
    let pivot = this.get(hi);
    let i = lo - 1;
    try {
      for (let j = lo; j < hi; j++) {
        if (this.compare(this.get(j), pivot) == -1) {
          i++;
          this.swap(i, j);
        }
      }

      this.swap(i + 1, hi);
    } catch (err) {
      console.log(err);
    }

    return i + 1;
  }
}
