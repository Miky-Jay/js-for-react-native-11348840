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
function formatArrayStrings(strings, processedNumbers) {
  const formattedStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (processedNumbers[i] % 2 === 0) {
      formattedStrings.push(strings[i].toUpperCase()); // Uppercase for even numbers
    } else {
      formattedStrings.push(strings[i].toLowerCase()); // Lowercase for odd numbers
    }
  }
  return formattedStrings;
}
