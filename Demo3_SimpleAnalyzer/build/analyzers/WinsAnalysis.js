"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (m) {
        var wins = 0;
        for (var _i = 0, m_1 = m; _i < m_1.length; _i++) {
            var match = m_1[_i];
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
        }
        return "Team " + this.team + " won " + wins + " times";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
