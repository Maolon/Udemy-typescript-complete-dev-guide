import fs from "fs";
import { DataReader } from './DataReader'
export const dateStringToDate = (dateString: string): Date => {
  //28/10/2018
  const dateParts = dateString.split("/").map((value: string) => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

export class CsvFileReader implements DataReader<string>{
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    try {
      this.data = fs
        .readFileSync(this.filename, {
          encoding: "utf-8"
        })
        .split("\n")
        .map((row: string): string[] => {
          return row.split(",");
        });
    } catch (error) {
      console.log(error);
    }
  }

  get() {
    return this.data;
  }
}
