function search(arr, target, start, end) {
    if (start > end) return false;
  
    const middle = Math.floor((start + end) / 2);
  
    if (arr[middle] === target) return true;
    
    if (arr[middle] > target) {
      return search(arr, target, start, middle - 1)
    } else return search(arr, target, middle + 1, end)
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