"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = void 0;
function keyByPoint(i, j) {
    return i + "," + j;
}
function getNeighbours(i, j, n, m) {
    var neighbours = Array();
    // up
    if (i > 0)
        neighbours.push([i - 1, j]);
    // down
    if (i < n - 1)
        neighbours.push([i + 1, j]);
    // left
    if (j > 0)
        neighbours.push([i, j - 1]);
    // right
    if (j < m - 1)
        neighbours.push([i, j + 1]);
    return neighbours;
}
function solve(bitmap, n, m) {
    var solution = Array();
    var visited = new Map();
    // Init with max distance every point
    for (var i = 0; i < n; i++) {
        solution.push((new Array(m)).fill(Infinity));
    }
    var queue = [];
    // Creates a queue with the whites and set to 0 distance from themselves
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (bitmap[i][j] === 1) {
                queue.push([i, j]);
                solution[i][j] = 0;
            }
        }
    }
    while (queue.length) {
        var curr = queue.shift();
        if (!curr)
            throw new Error('undefined point from queue');
        var i = curr[0], j = curr[1];
        visited.set(keyByPoint(i, j), true);
        var neighbours = getNeighbours(i, j, n, m);
        for (var _i = 0, neighbours_1 = neighbours; _i < neighbours_1.length; _i++) {
            var neigh = neighbours_1[_i];
            var ni = neigh[0], nj = neigh[1];
            if (visited.has(keyByPoint(ni, nj)))
                continue;
            // For this neighbour keep the minimum distance between:
            //  - the previously calculated one (Infinity at t0)
            //  - the current distance from a white (0 if white) + 1 to reach it
            solution[ni][nj] = Math.min(solution[ni][nj], solution[i][j] + 1);
            queue.push(neigh);
        }
    }
    return solution;
}
exports.solve = solve;
