// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
const arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

let arr = [];
for (let index = 0; index < arraySize; index++) {
  let randomNumber = Math.round(Math.random() * arraySize);

  arr.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

let swap => (items, firstIndex, secondIndex) {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

let selectionSort => (items) {

  // FILL IN YOUR CODE HERE
  // Use the above swap function when you are ready to start swapping elements in the array.
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(arr).join(" "));
