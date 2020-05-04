import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget{
    print(r: string):void{
        console.log(r);
    }
}