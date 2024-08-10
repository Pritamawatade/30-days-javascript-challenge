// //• Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.

// • Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.

// • Log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  // Merge the two sorted arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }

  // If there are remaining elements in nums1
  while (i < nums1.length) {
    mergedArray.push(nums1[i]);
    i++;
  }

  // If there are remaining elements in nums2
  while (j < nums2.length) {
    mergedArray.push(nums2[j]);
    j++;
  }

  // Calculate the median
  let n = mergedArray.length;
  if (n % 2 === 0) {
    return (
      (mergedArray[Math.floor((n - 1) / 2)] + mergedArray[Math.floor(n / 2)]) /
      2
    );
  } else {
    return mergedArray[Math.floor(n / 2)];
  }
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0
console.log(findMedianSortedArrays([], [1])); // Output: 1
console.log(findMedianSortedArrays([2], [])); // Output: 2

// Activity 2: Merge k Sorted Lists
// • Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// • Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into
// one sorted linked list.
// • Create a few test cases with linked lists and log the merged list.

// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let mergedList = [];
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedList.push(mergeTwoLists(l1, l2));
    }
    lists = mergedList;
  }

  return lists[0];
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) current.next = l1;
  if (l2 !== null) current.next = l2;

  return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(-1);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print the linked list
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Test cases
let l1 = createLinkedList([1, 4, 5]);
let l2 = createLinkedList([1, 3, 4]);
let l3 = createLinkedList([2, 6]);

let lists = [l1, l2, l3];
let mergedList = mergeKLists(lists);
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Additional test cases
let l4 = createLinkedList([]);
let l5 = createLinkedList([]);
let l6 = createLinkedList([1]);

let lists2 = [l4, l5, l6];
let mergedList2 = mergeKLists(lists2);
printLinkedList(mergedList2); // Output: 1

let l7 = createLinkedList([1, 3, 5, 7]);
let l8 = createLinkedList([2, 4, 6, 8]);
let l9 = createLinkedList([0, 9, 10, 11]);

let lists3 = [l7, l8, l9];
let mergedList3 = mergeKLists(lists3);
printLinkedList(mergedList3); // Output: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11

// Activity 3: Trapping Rain Water
// • Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and
// computes how much water it can trap after raining.
// • Log the amount of trapped water for a few test cases.

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let left_max = 0;
  let right_max = 0;
  let total_water = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        total_water += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right];
      } else {
        total_water += right_max - height[right];
      }
      right--;
    }
  }

  return total_water;
}

// Example usage:
const testCases = [
  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], // Expected output: 6
  [4, 2, 0, 3, 2, 5], // Expected output: 9
  [1, 0, 2, 1, 0, 1, 3], // Expected output: 5
  [3, 0, 2, 0, 4], // Expected output: 7
];

testCases.forEach((testCase, index) => {
  console.log(`Test Case ${index + 1}:`, trap(testCase));
});

// Activity 4: N-Queens
// • Task 4: Solve the "N-Queens" problem on LeetCode.
// • Write a function that places n queens on an xn chessboard such that no two queens attack each other, and returns all distinct
// solutions to the n-queens puzzle.
// • Log the distinct solutions for a few test cases.

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
    let [currentWord, level] = queue.shift();

    if (currentWord === endWord) return level;

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) {
        // ASCII 'a' to 'z'
        let newWord =
          currentWord.slice(0, i) +
          String.fromCharCode(c) +
          currentWord.slice(i + 1);

        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

// Example usage:
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList)); // Output: 5

// Activity 5: Word Ladder
// • Task 5: Solve the "Word Ladder" problem on LeetCode.
// • Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation
// sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must
// exist in the word list.
// • Log the length of the shortest transformation sequence for a few test cases.

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
    let [currentWord, level] = queue.shift();

    if (currentWord === endWord) {
      return level;
    }

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) {
        // ASCII 'a' to 'z'
        let newWord =
          currentWord.slice(0, i) +
          String.fromCharCode(c) +
          currentWord.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

// Test cases
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Output: 0
console.log(ladderLength("a", "c", ["a", "b", "c"])); // Output: 2
