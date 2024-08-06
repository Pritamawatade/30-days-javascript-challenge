// Activity one : sorting algorithm

// Task one : bubble sort

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: ", arr);
console.log("Sorted array: ", bubbleSort(arr));

// Task two : selection sort

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

let arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: ", arr);
console.log("Sorted array: ", selectionSort(arr));

// Implement the quick sort algo to sort the array

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;
  for (let j = left; j <= right - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;
  return i + 1;
}

let arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: ", arr2);
console.log("Sorted array: ", quickSort(arr2));

// Activity two : Searching algo

function linearSearch(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] == target) {
      return index;
      break;
    }
  }
  console.log("Targeted element not found: ", target);
}

let array = [12, 2, 32, 4, 54, 5, 54, 392];

console.log("Element found at ==>", linearSearch(array, 392));

// binary search
function binarySearch(arr, element, start, end) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == element) return mid;
  else if (arr[mid] > element) {
    return binarySearch(arr, element, start, mid - 1);
  } else {
    return binarySearch(arr, element, mid + 1, end);
  }
}

let arr4 = [1, 2, 3, 4, 5, 6];
console.log("ELEMENT EXIST AT " + binarySearch(arr4, 5, 0, 5));

// Activity three

// Sorting algo

function charcount(str, char) {
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] == char) {
      count++;
    }
  }

  return count;
}

let str = "I am gonna be the king of the pirates";

console.log(" char is repeated ", charcount(str, "a"));

// Activity four

function longestSubstring(str) {
  let maxLength = 0;
  let currentLength = 0;
  let start = 0;
  let charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    if (charSet.has(str[i])) {
      while (str[start] !== str[i]) {
        charSet.delete(str[start]);
        start++;
        currentLength--;
      }
      start++;
    } else {
      charSet.add(str[i]);
      currentLength++;
    }

    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}

console.log(
  "Length of longest substring without repeating characters: ",
  longestSubstring("abcabcbb")
); // 3

// write the function to rotate the array by k positions and log the routed array

function rotateArray(arr, k) {
  const n = arr.length;
  const rotatedArray = [];

  for (let i = 0; i < n; i++) {
    rotatedArray[(i + k) % n] = arr[i];
  }

  console.log(rotatedArray);
}

// Example usage
const ara = [1, 2, 3, 4, 5];
const k = 2;
rotateArray(ara, k);

// write the function to merge two sorted arrays into a single sorted array

function mergeArrays(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  return mergedArray.sort((a, b) => a - b);
}

let arr6 = [1, 3, 5, 7];

let arr7 = [2, 4, 6, 8];

console.log("Merged array: ", mergeArrays(arr6, arr7)); // [1, 2, 3, 4, 5, 6, 7, 8]
