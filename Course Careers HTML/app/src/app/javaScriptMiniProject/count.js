let count = 0;

function addToCount() {
  count++;
  console.log(count);
}

function minusCount(){
    count--;
    console.log(count);
}

const buttonUp = document.getElementById("countUp");
buttonUp.addEventListener("click", addToCount);

const buttonDown = document.getElementById("countDown");
buttonDown.addEventListener("click", minusCount);