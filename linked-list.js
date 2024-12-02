class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    let current = this.head;
    this.length++;
    
    if (!current) {
      this.head = newNode;
      return;
    }

    while (current) {
      if (current.next === null) {
        current.next = newNode;
        break;
      }
      current = current.next;
    }

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
