//Activity one 

// linked list 



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Method to add a new node at the end of the list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // Method to remove a node from the end of the list 
    pop() {
        let popped;
        if (!this.head) return null;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
             popped = current.next.value;
            current.next = null;
            this.tail = current;
        }

        this.length--;
        return this.tail ? popped : null;

    }

    // method to display all the nodes in the list 
    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.display()

console.log('Item popped = '+myList.pop()); // Output: 3'


// Activity two : stack 

// implent stack with push, pop , and peek functions 



class Stack {
    constructor() {
        this.stack = [];
    }

    // method to push an item to the stack
    push(item) {
        this.stack.push(item);
    }

    // method to pop an item from the stack
    pop() {
        return this.stack.pop();
    }

    // method to peek at the top item of the stack
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // method to check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }
}

// Example usage:

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log('Top item = '+myStack.peek()); // Output: 3 

console.log('Item popped = '+myStack.pop()); // Output: 3
console.log('Item popped = '+myStack.pop()); // Output: 2
console.log('Item popped = '+myStack.pop()); // Output: 1

console.log('Top item = '+myStack.peek()); // Output: 2

console.log('Is stack empty? '+myStack.isEmpty()); // Output: false

// task 2 

let str = 'chai aur code';
let myStack1 = [];

for (let i = 0; i < str.length; i++){
    myStack1.push(str[i]);
}

console.log('reverse string : ');
for (let i = 0; i < str.length; i++){
   console.log(myStack1.pop(str[i]));
    
}


// Acitity 3 queue

// implement queue with enqueue, dequeue, and front functions

class Queue {
    constructor() {
        this.queue = [];
    }

    // method to enqueue an item to the queue
    enqueue(item) {
        this.queue.push(item);
    }

    // method to dequeue an item from the queue
    dequeue() {
        return this.queue.shift();
    }

    // method to peek at the front item of the queue
    front() {
        return this.queue[0];
    }

    // method to check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }
}

// Example usage:

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log('Front item = '+myQueue.front()); // Output: 1
console.log('dequeue item = '+myQueue.dequeue()); // Output:

console.log('Front item = '+myQueue.front()); // Output: 2



// use the queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    // method to add a print job to the queue
    addPrintJob(job) {
        this.queue.enqueue(job);
    }

    // method to process the next print job
    processPrintJob() {
        if (!this.queue.isEmpty()) {
            console.log('Processing print job: ', this.queue.dequeue());
        } else {
            console.log('No print jobs in queue.');
        }
    }
}

// Example usage:

const printer = new PrinterQueue();
printer.addPrintJob('Page 1');
printer.addPrintJob('Page 2');
printer.processPrintJob(); // Output: Processing print job: Page 1
printer.processPrintJob(); // Output: Processing print job: Page 2

console.log('Front item = '+printer.queue.front()); // Output: null

// activity four 

// implement a Treenode class to represt a node in binary tree with properties value , left , right 

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}   
// Binary tree class to inserting values and performing inorder travsel 

class BinaryTree {
    constructor() {
        this.root = null;
    }
    // method to insert a new node in the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
        return this;   
    }
    // method to perform inorder traversal of the binary tree
    inorderTraversal() {
        this._inorderTraversal(this.root);
        console.log();
    }
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }
    _inorderTraversal(node) {
        if (node) {
            this._inorderTraversal(node.left);
            console.log(node.value);
            this._inorderTraversal(node.right);
        }
    }
}

// example usage:

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);

console.log('Inorder traversal:');

tree.inorderTraversal(); // Output: 3 5 10 15


// activity five 
// impement the graph class with methods to add vertices , add edges and perform a BFS

class Graph {
    constructor() {
        this.vertices = [];
        this.adjacencyList = {};
    }
    // method to add a new vertex to the graph
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.adjacencyList[vertex] = [];
    }
    // method to add an edge between two vertices in the graph
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    // method to perform a breadth-first search starting from a given vertex
    breadthFirstSearch(startVertex) {
        const visited = {};
        const queue = [];
        for (let vertex of this.vertices) {
            visited[vertex] = false;
        }
        visited[startVertex] = true;
        queue.push(startVertex);
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);
            for (let neighbor of this.adjacencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return this;
    }
}

// example usage:

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');

graph.addEdge('A', 'C');

console.log('Breadth-first search from vertex A:');

graph.breadthFirstSearch('A'); // Output: A B C

