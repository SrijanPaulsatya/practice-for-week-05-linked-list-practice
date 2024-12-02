const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

function testAddToHead(listType) {
    const list = new listType();
    console.time('addToHead');
    for (let i = 0; i < 100000; i++) {
        list.addToHead(i);
    }
    console.timeEnd('addToHead');
}

function testAddToTail(listType) {
    const list = new listType();
    console.time('addToTail');
    for (let i = 0; i < 100000; i++) {
        list.addToTail(i);
    }
    console.timeEnd('addToTail');
}

// Testing singly linked list
console.log('Singly Linked List Add To Head Test');
testAddToHead(LinkedList);

console.log('Singly Linked List Add To Tail Test');
testAddToTail(LinkedList);

// Testing doubly linked list
console.log('Doubly Linked List Add To Head Test');
testAddToHead(DoublyLinkedList);

console.log('Doubly Linked List Add To Tail Test');
testAddToTail(DoublyLinkedList);

