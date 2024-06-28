const matrix = [];

for (let i= 0; i< 2; i++){
    const arr = [];
    
    for (let j= 0; j< 3; j++){
        const numbers = [];
        
        const start = i * 6 + j * 2 + 1
        for (let k = start; k< start + 2; k++){
            numbers.push(k);
        }
        arr.push(numbers);
    
    }
    matrix.push(arr);
}

console.log(matrix)