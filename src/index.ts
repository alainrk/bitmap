'use strict';

import fs from 'fs';

function getNeighbours(i: number, j: number, n: number, m: number): number[][] {
  const neighbours: number[][] = Array();
  if (i > 0) neighbours.push([i - 1, j]);
  if (i < n - 1) neighbours.push([i + 1, j]);
  if (j > 0) neighbours.push([i, j - 1]);
  if (j < m - 1) neighbours.push([i, j + 1]);

  return neighbours;
}

export function solve(bitmap: number[][], n: number, m: number): number[][] {
  const solution: number[][] = Array();
  const visited: Map<string, boolean> = new Map();

  // Init with max distance every point
  for (let i: number = 0; i < n; i++) {
    solution.push((new Array(m)).fill(Infinity));
  }

  const queue: number[][] = []

  // Creates a queue with the whites and set to 0 distance from themselves
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (bitmap[i][j] === 1) {
        queue.push([i, j]);
        solution[i][j] = 0;
      }
    }
  }

  console.log('bitmap', bitmap);

  while (queue.length) {
    console.log('queue', queue);
    console.log('solution', solution);

    const curr = queue.shift();
    if (!curr) throw new Error('undefined point from queue');

    const [i, j] = curr;
    visited.set(`${i},${j}`, true);

    const neighbours: number[][] = getNeighbours(i, j, n, m);
    for (const neigh of neighbours) {
      const [ni, nj] = neigh;
      if (visited.has(`${i},${j}`)) continue
      solution[ni][nj] = Math.min(solution[ni][nj], solution[i][j] + 1);
      queue.push(neigh);
      // visited.set(`${i},${j}`, true);
    }
  }

  return solution;
}

function printResult(result: number[][]) {
  for (const row of result) {
    console.log(row.join(' '));
  }
  console.log('\n');
}

function main() {
  const data = fs.readFileSync(0, 'utf-8');
  const lines = data.split('\n');
  let currLine = 0;

  const numTests: number = parseInt(lines[currLine].trim());
  currLine++;

  for (let i: number = 0; i < numTests; i++) {
    const [n, m] = lines[currLine].trim().split(' ').map(x => parseInt(x));
    currLine++;

    let bitmap: number[][] = Array();

    for (let r: number = 0; r < n; r++) {
      const row: number[] = lines[currLine].trim().split('').map(x => parseInt(x));
      currLine++;
      if (row.length !== m) {
        throw new Error('wrong amount of columns')
      }
      bitmap.push(row);
    }
    const result = solve(bitmap, n, m);
    printResult(result);
    // test cases divider empty row
    currLine++;
  }
}

main();