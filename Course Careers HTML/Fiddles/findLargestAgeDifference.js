function findLargestAgeDifference(agePairs) {
  const ageDif = [];
  let diff = 0;

  if (agePairs.length === 0) {
    console.log(0);
  } else {
    for (const [numA, numB] of agePairs) {
      diff = numA - numB;

      const absoluteValues = Math.abs(diff);

      ageDif.push(absoluteValues);
    }
    console.log(ageDif);

    const largestAgeDiff = Math.max(...ageDif);
    console.log(largestAgeDiff);
  }
}

findLargestAgeDifference([]);
