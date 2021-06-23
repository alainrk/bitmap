'use strict';

import fs from 'fs';
import { solve } from './bitmap';

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