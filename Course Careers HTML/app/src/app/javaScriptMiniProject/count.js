let count = 0;

function printToConsole() {
  console.log("Button was clicked!");
  count++;
  console.log(count);
}

const button = document.getElementById("countUp");
button.addEventListener("click", printToConsole);
