// Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty.

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // example:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.pop());      // Output: 3
  console.log(stack.isEmpty());  // Output: false
  console.log(stack.pop());      // Output: 2
  console.log(stack.pop());      // Output: 1
  console.log(stack.isEmpty());  // Output: true
  



// Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty.

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Usage example:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue());      // Output: 1
  console.log(queue.isEmpty());      // Output: false
  console.log(queue.dequeue());      // Output: 2
  console.log(queue.dequeue());      // Output: 3
  console.log(queue.isEmpty());      // Output: true
  