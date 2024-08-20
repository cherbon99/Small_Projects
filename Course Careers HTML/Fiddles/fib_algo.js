function fib(n) {
  if (n <= 2) return 1; //base case

  return fib(n - 1) + fib(n - 2);
}

//O(n) time - O(n) space
function fibMemo(n, calculated = { 1: 1, 2: 1 }) {
  if (n in calculated) return calculated[n];

  const result = fibMemo(n - 1, calculated) + fibMemo(n - 2, calculated);
  calculated[n] = result;
  return result;
}

function fibIter(n) {
  if (n <= 2) return 1;

  let last = 1;
  let secondLast = 1;

  for (let i = 2; i < n; i++) {
    const temp = last;
    last = last + secondLast;
    secondLast = temp;
  }

  return last;
}

//const result = fibIter(70);
//console.log(result);

// binary tree traversal

class Node {
  value;
  left;
  right;

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const node10 = new Node(10);
const node9 = new Node(9);
const node8 = new Node(8);
const node7 = new Node(7);
const node6 = new Node(6, node10);
const node5 = new Node(5, node9);
const node4 = new Node(4, node8);
const node3 = new Node(3, node6, node7);
const node2 = new Node(2, node4, node5);
const head = new Node(1, node2, node3);

function inOrder(node) {
  if (node == null) return;

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

function preOrder(node) {
  if (node == null) return;

  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

function postOrder(node) {
  if (node == null) return;

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

console.log("In Order");
inOrder(head);

console.log("Pre Order");
preOrder(head);

console.log("post Order");
postOrder(head);

function reverseStr(string, newStr = []) {
  if (string.length == 0) return;

  const char = string[0];
  reverseStr(string.slice(1), newStr);
  newStr.push(char);

  if (string.length === newStr.length) return newStr.join("");
}

const str = "good morning starshine the earth says hello";
const result = reverseStr(str);
console.log(result);
