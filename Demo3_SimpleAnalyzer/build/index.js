"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var utils_1 = require("./utils");
var Summary_1 = require("./Summary");
var reader = new MatchReader_1.MatchReader(new utils_1.CsvFileReader("football.csv"));
reader.read();
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(reader.get());
