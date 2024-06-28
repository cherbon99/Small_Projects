const arr = [1,1,1,2,3,5,8,9,4,5];
const numbers = new Set();

for(const value of arr){
   if (numbers.has(value)){
    console.log("gotcha ya filthy duplicate", value)
   }
   numbers.add(value);
}




