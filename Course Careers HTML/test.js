const str = "hi earth my name is chris"
const freq = new Map();

for(const char of str){
   if( freq.has(char)){
      freq.set(char, freq.get(char) + 1)
   }else {
      freq.set(char, 1);
   }
}

console.log(freq);

