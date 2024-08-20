function search(arr, target, start, end) {
  if (start > end) return false;

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) return true;

  if (arr[middle] > target) {
    return search(arr, target, start, middle - 1);
  } else return search(arr, target, middle + 1, end);
}

//depth and bredth
const maze = [
  [" ", "#", "#", "#", "#", "#", "#", "#", "#", " "],
  [" ", " ", " ", " ", " ", "#", " ", " ", " ", " "],
  ["#", "#", "#", "#", " ", "#", " ", "#", "#", "#"],
  [" ", " ", " ", " ", " ", " ", " ", "#", " ", " "],
  [" ", "#", "#", "#", "#", "#", "#", "#", "#", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", "#"],
  ["#", "#", "#", "#", " ", "#", "#", "#", " ", " "],
  [" ", " ", " ", " ", " ", "#", " ", " ", "#", "#"],
  [" ", "#", "#", "#", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", "#", "#", "#", "#", "X"],
];

function getNeighbors(arr, x, y) {
  const neighbors = [];

  if (x >= 1 && arr[y][x - 1] !== "#") neighbors.push([y, x - 1]); //left

  if (x < arr.length - 1 && arr[y][x + 1] !== "#") neighbors.push([y, x + 1]); //right

  if (y >= 1 && arr[y - 1][x] !== "#") neighbors.push([y - 1, x]); //top

  if (y < arr.length - 1 && arr[y + 1][x] !== "#") neighbors.push([y + 1, x]); //bottom

  return neighbors;
}
function getStringPos(pos) {
  return `${pos[0]}, ${pos[1]}`;
}

function dfs(array) {
  const visited = new Set();
  const stack = [[0, 0]];

  while (stack.length > 0) {
    const pos = stack.pop();
    const [y, x] = pos;

    if (array[y][x] === "X") break;

    const strPos = getStringPos(pos);
    visited.add(strPos);

    const neighbors = getNeighbors(array, x, y);
    for (const neighbor of neighbors) {
      const strNeighbor = getStringPos(neighbor);
      if (visited.has(strNeighbor)) continue;
      stack.push(neighbor);
    }
  }
  return visited;
}

const path = dfs(maze);
console.log(path);

function printMaze(maze) {
    let mazeString = "";
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        mazeString += maze[i][j] + "O";
      }
      mazeString += "\n";
    }
    console.log(mazeString);
  }

for (const pos of path) {
  const [y, x] = pos.split(",");
  maze[y][x] = "X";
}

printMaze(maze);