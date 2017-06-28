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

let swap = function(items, firstIndex, secondIndex) {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

let selectionSort = function(items) {


  let len = items.length;
  let min;

  for (let i = 0; i < len; i++) {

    // set index of minimum to this position
    min = i;

    // check the rest of the array to see if anything is smaller
    for (let j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }

    // if the current position isn't the minimum, swap it and the minimum
    if (i !== min) {
      swap(items, i, min);
    }
  }

  return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(arr).join(" "));
