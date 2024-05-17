function processArray(arr) {
  const processedArray = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      processedArray.push(num * num); // Square even numbers
    } else {
      processedArray.push(num * 3); // Triple odd numbers
    }
  }
  return processedArray;
}
