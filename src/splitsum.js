function splitSum1(tours) { // O(n)
    // find the sum of the whole array
    const total = tours.reduce((a, c) => a + c, 0); // O(n)
  
    let preSum = 0;
    let postSum = total;
    let smallest = Number.POSITIVE_INFINITY;
  
    // for loop goes from second element to second-to-last element
    for (let i = 0; i < tours.length - 1; i++) {
      preSum = preSum + tours[i];
      postSum = postSum - tours[i];
  
      const difference = Math.abs(preSum - postSum);
      if (difference < smallest) {
        smallest = difference;
      }
    }
    return smallest;}

   function splitSum2(tours) { // O(n^2)
    let smallest = Number.POSITIVE_INFINITY;for (let k = 0; k < tours.length; k++) {
        let preSum = tours.slice(0, k + 1).reduce((a, c) => a + c, 0);
        let postSum = tours.slice(k + 1).reduce((a, c) => a + c, 0);
        const difference = Math.abs(preSum - postSum);
        if (difference < smallest) {
          smallest = difference;
        }}
        return smallest;
    }