// Day 21
function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

function reverseInteger(x) {
  let reversed = 0;
  let sign = Math.sign(x);
  x = Math.abs(x);

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  reversed *= sign;

  // Handle overflow for 32-bit signed integer range
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  return reversed;
}

// Example usage:
const num1 = 123;
const num2 = -123;
const num3 = 120;
const num4 = 0;

console.log(reverseInteger(num1)); // Output: 321
console.log(reverseInteger(num2)); // Output: -321
console.log(reverseInteger(num3)); // Output: 21
console.log(reverseInteger(num4)); // Output: 0

function isPalindrome(x) {
  // Negative numbers are not palindromes
  if (x < 0) return false;

  // Convert the number to a string
  const str = x.toString();

  // Reverse the string
  const reversedStr = str.split("").reverse().join("");

  // Check if the original string is the same as the reversed string
  return str === reversedStr;
}

// Example usage:
const testCases = [121, -121, 10, 12321, 0];
testCases.forEach((num) => {
  console.log(`Is ${num} a palindrome? ${isPalindrome(num)}`);
});

// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  // Create a dummy node to act as the starting point of the merged list
  let dummy = new ListNode(-1);
  let current = dummy;

  // Traverse both lists and compare the values
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // If there are remaining nodes in either list, append them
  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  // Return the merged list, which starts from the next node of the dummy
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
let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);

let mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      // If the character is an opening bracket, push it onto the stack
      stack.push(char);
    } else {
      // If the character is a closing bracket, check if it matches the top of the stack
      const top = stack.pop();
      if (map[top] !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, all opening brackets were properly closed
  return stack.length === 0;
}

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
