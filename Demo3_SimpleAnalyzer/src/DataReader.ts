export interface DataReader<T> {
  read(): void;
  data:T[] | T[][]
  get(): T[] | T[][];
}
