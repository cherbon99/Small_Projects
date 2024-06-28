const arr = [1,1,1,2,3,5,8,9,4,5];
for(const [idx, value] of arr.entries()){
    for (const value2 of arr.slice(idx + 1)){
        if( value === value2){
            console.log("gotcha ya filthy duplicate", value);
            break
        }
    }
}


