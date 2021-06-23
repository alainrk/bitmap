function keyByPoint(i: number, j: number): string {
  return `${i},${j}`;
}

function getNeighbours(i: number, j: number, n: number, m: number): number[][] {
  const neighbours: number[][] = Array();
  // up
  if (i > 0) neighbours.push([i - 1, j]);
  // down
  if (i < n - 1) neighbours.push([i + 1, j]);
  // left
  if (j > 0) neighbours.push([i, j - 1]);
  // right
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

  while (queue.length) {
    const curr = queue.shift();
    if (!curr) throw new Error('undefined point from queue');

    const [i, j] = curr;
    visited.set(keyByPoint(i, j), true);

    const neighbours: number[][] = getNeighbours(i, j, n, m);
    for (const neigh of neighbours) {
      const [ni, nj] = neigh;
      if (visited.has(keyByPoint(ni, nj))) continue
      // For this neighbour keep the minimum distance between:
      //  - the previously calculated one (Infinity at t0)
      //  - the current distance from a white (0 if white) + 1 to reach it
      solution[ni][nj] = Math.min(solution[ni][nj], solution[i][j] + 1);
      queue.push(neigh);
    }
  }

  return solution;
}