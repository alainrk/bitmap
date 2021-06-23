"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bitmap_1 = require("./bitmap");
var areEqual = function (m1, m2) {
    return JSON.stringify(m1) === JSON.stringify(m2);
};
function test() {
    var bitmap = new Array;
    var result = new Array;
    var expected = new Array;

    // 1 - Given case
    console.log('1 - Given case');
    bitmap = [
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 0],
    ];
    result = bitmap_1.solve(bitmap, bitmap.length, bitmap[0].length);
    expected = [
        [3, 2, 1, 0],
        [2, 1, 0, 0],
        [1, 0, 0, 1]
    ];
    console.assert(areEqual(result, expected));

    // 2 - Easy case
    console.log('2 - Easy case');
    bitmap = [
        [0, 1],
        [0, 0],
        [0, 0],
    ];
    result = bitmap_1.solve(bitmap, bitmap.length, bitmap[0].length);
    expected = [
        [1, 0],
        [2, 1],
        [3, 2]
    ];
    console.assert(areEqual(result, expected));

    // 3 - Edge single
    console.log('3 - Edge single');
    bitmap = [
        [1]
    ];
    result = bitmap_1.solve(bitmap, bitmap.length, bitmap[0].length);
    expected = [
        [0]
    ];
    console.assert(areEqual(result, expected));
    // 4 - Edge column
    console.log('4 - Edge column');
    bitmap = [
        [1],
        [0],
        [0],
    ];
    result = bitmap_1.solve(bitmap, bitmap.length, bitmap[0].length);
    expected = [
        [0],
        [1],
        [2]
    ];
    console.assert(areEqual(result, expected));

    // 5 - Edge row
    console.log('5 - Edge row');
    bitmap = [
        [0, 1, 0, 0, 0]
    ];
    result = bitmap_1.solve(bitmap, bitmap.length, bitmap[0].length);
    expected = [
        [1, 0, 1, 2, 3]
    ];
    console.assert(areEqual(result, expected));

    // 6 - Large case
    console.log('6 - Large case');
    bitmap = [
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    result = bitmap_1.solve(bitmap, bitmap.length, bitmap[0].length);
    expected = [
        [0, 1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 7],
        [3, 4, 5, 6, 7, 8],
        [4, 5, 6, 7, 8, 9]
    ];
    console.assert(areEqual(result, expected));
}
test();
