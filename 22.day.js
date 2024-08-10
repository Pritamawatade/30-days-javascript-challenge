// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let p = l1,
    q = l2,
    current = dummy;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

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
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);

let sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList); // Output: 7 -> 0 -> 8

// Additional test cases
let l3 = createLinkedList([0]);
let l4 = createLinkedList([0]);

let sumList2 = addTwoNumbers(l3, l4);
printLinkedList(sumList2); // Output: 0

let l5 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
let l6 = createLinkedList([9, 9, 9, 9]);

let sumList3 = addTwoNumbers(l5, l6);
printLinkedList(sumList3); // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (charIndexMap.has(char)) {
      // Move the start pointer to the right of the previous index of the current character
      start = Math.max(charIndexMap.get(char) + 1, start);
    }
    // Update the last seen index of the current character
    charIndexMap.set(char, end);
    // Calculate the length of the current substring
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
let testCases = [
  "abcabcbb", // Expected output: 3 ("abc")
  "bbbbb", // Expected output: 1 ("b")
  "pwwkew", // Expected output: 3 ("wke")
  "", // Expected output: 0 (empty string)
  " ", // Expected output: 1 (single space)
  "au", // Expected output: 2 ("au")
  "dvdf", // Expected output: 3 ("vdf")
];

testCases.forEach((testCase) => {
  console.log(
    `Length of longest substring without repeating characters in "${testCase}": ${lengthOfLongestSubstring(
      testCase
    )}`
  );
});

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentArea = width * currentHeight;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Example usage:
testCases = [
  [1, 8, 6, 2, 5, 4, 8, 3, 7], // Expected output: 49
  [1, 1], // Expected output: 1
  [4, 3, 2, 1, 4], // Expected output: 16
  [1, 2, 1], // Expected output: 2
];

testCases.forEach((testCase, index) => {
  console.log(`Test Case ${index + 1}:`, maxArea(testCase));
});

function threeSum(nums) {
  const results = [];
  if (nums.length < 3) return results;

  // Sort the array
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);
        // Skip duplicates for left and right pointers
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return results;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // Output: []
console.log(threeSum([0])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // Output: [[-2, 0, 2], [-2, 1, 1]]
