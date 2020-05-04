import { OutputTarget } from "../Summary";
import fs from "fs";
import JSDOM from 'jsdom'


export class HtmlReport implements OutputTarget{
    print(report: string):void{
       
        let output = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `
        fs.writeFileSync('report.html',output);
    }
}