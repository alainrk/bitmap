'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function solve(bitmap, n, m) {
    return bitmap;
}
function printResult(result) {
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var row = result_1[_i];
        console.log(row.join(' '));
    }
    console.log('\n');
}
function main() {
    var data = fs_1.default.readFileSync(0, 'utf-8');
    var lines = data.split('\n');
    var currLine = 0;
    var numTests = parseInt(lines[currLine].trim());
    currLine++;
    for (var i = 0; i < numTests; i++) {
        var _a = lines[currLine].trim().split(' ').map(function (x) { return parseInt(x); }), n = _a[0], m = _a[1];
        currLine++;
        var bitmap = Array();
        for (var r = 0; r < n; r++) {
            var row = lines[currLine].trim().split('').map(function (x) { return parseInt(x); });
            currLine++;
            if (row.length !== m) {
                throw new Error('wrong amount of columns');
            }
            bitmap.push(row);
        }
        var result = solve(bitmap, n, m);
        printResult(result);
        // test cases divider empty row
        currLine++;
    }
}
main();
//# sourceMappingURL=index.js.map