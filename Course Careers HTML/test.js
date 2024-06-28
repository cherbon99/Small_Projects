const str = prompt("enter a string");
const target = "!"

for (let i = 0; i < str.length; i++){
    const char = str[i];
    if (char === target){
        alert(`we found the ${target} in ${i + 1} characters`);
        break;
    }
}