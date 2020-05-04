import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./utils";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";


const reader = new MatchReader(new CsvFileReader("football.csv"));
reader.read();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(reader.get());
