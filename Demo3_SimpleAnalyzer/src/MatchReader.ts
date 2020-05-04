import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import { DataReader } from './DataReader'
import { MatchData }from './MatchData'
//Composition Approach to MatchReader

export class MatchReader implements DataReader<MatchData> {
  data: MatchData[] = [];

  constructor(public reader: DataReader<string>) {}

  read(): void {
    this.reader.read();
    const data = this.reader.data as string[]
    data.map((row: string) => {
      this.data.push([
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ]);
    });
  }

  get(): MatchData[] {
    return this.data;
  }
}
