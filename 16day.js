// day 16 :  recursion

// Activity one 

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }

}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(3));

function fibonacci(n) {

    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(5));
console.log(fibonacci(2));
console.log(fibonacci(33));
console.log(fibonacci(3));




// Activity two

function sumofArray(arr) {
    if (arr.length == 0) {
        return 0;
    }
    else {
        return arr[0] + sumofArray(arr.slice(1));
    }
}

let arr = [1, 2, 3, 4, 5]
let arr1 = [1, 2, 3, 4, 5, 6, 6]
let arr2 = [1, 2, 3]
console.log('sum of array = ' + sumofArray(arr));
console.log('sum of array = ' + sumofArray(arr));
console.log('sum of array = ' + sumofArray(arr));


// find maximum element 
function findMaximum(arr) {
    if (arr.length == 1) {
        return arr[0];
    }
    let max = findMaximum(arr.slice(0, -1));
    return Math.max(max, arr[arr.length - 1]);
}

console.log(findMaximum([1, 2, 3, 4, 5]));
console.log(findMaximum([1, 2, 233, 4, 5]));
console.log(findMaximum([1, 2, 3543, 4, 5]));


// Activity three

//reverse the string 

function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("Hello World"));

// palindrome

function isPalindrome(str, s, e) {

    if (s >= e) {

        return false;
    }
    else {
        if (str.charAt(s) != str.charAt(e)) {

            return false;
        }
        if (str.charAt(s) == str.charAt(e)) {

            return true;
        }
        else {
            return isPalindrome(str, s + 1, e - 1);
        }
    }


}

console.log(isPalindrome("mom", 0, 2));
console.log(isPalindrome("dad", 0, 2));
console.log(isPalindrome("pop", 0, 2));


// Activty four 

// binary search wiht recursively

function binarySearch(arr , element , start , end){
    if(start > end) return false
    let mid = Math.floor((start + end) / 2)
    if(arr[mid] == element)
        return mid;
    else if(arr[mid] > element){
        return binarySearch(arr, element, start, mid - 1)
    }
    else{
        return binarySearch(arr, element, mid + 1, end)
    }
}

let arr4 = [1,2,3,4,5,6]
console.log('ELEMENT EXIST AT '+binarySearch(arr4,5,0,5));


// count the accurence of the element in the array with recursively

function countele(arr,element,start,end, count){
    if(start > end) return count
    if(arr[start] == element) count++
    return countele(arr,element, start + 1, end, count)
}
let count = 0;
let arr5 = [1,2,3,4,5,1,1,1,1]
console.log('NUMBER REAPTED' +countele(arr5,1,0,8, count));


// Activity five : binary tree

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function insert(node, data) {
    if (node === null) {
        return new Node(data);
    }
    if (data < node.data) {
        node.left = insert(node.left, data);
    } else if (data > node.data) {
        node.right = insert(node.right, data);
    }
    return node;
}

function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.data);
        inOrder(node.right);
    }
}

function depth(node) {
    if (node === null) return 0;
    let leftDepth = depth(node.left);
    let rightDepth = depth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

let root = null;

root = insert(root, 10);

insert(root, 20);

insert(root, 30);

insert(root, 40);

inOrder(root);

console.log('Depth of the tree: ', depth(root));