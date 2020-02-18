// Constructor to initialize the queue
class Queue {
    constructor(element) {
      // TODO
      this.element = element;
      this.putElement = [];
      this.frontCounter = 0;
    };
    // Adds element at the end of the queue
    enqueue(element) {
      // TODO
      this.frontCounter++
      this.putElement.splice(0,0,element)
      console.log('Enqueue: ', this.putElement)
    };
    // Removes element from the front, and returns that element
    dequeue() {
      // TODO
        this.frontCounter--
        console.log('First element in the list: ', this.putElement[this.frontCounter])
        //console.log('List before removing first element: ', this.putElement)
        this.putElement.splice(this.frontCounter, 1)
        console.log('List after first element removed: ', this.putElement)
    };
    // Returns front-most element from queue, but doesn't remove it
    first() {
      console.log('The first-most element: ', this.putElement[this.frontCounter-1])
      //console.log('frontCounter: ', this.frontCounter)
    };
    // Return true if queue has no elements in it, otherwise false
    isEmpty() {
      // TODO
      if(this.putElement.length === 0){
          return true
      }
      return false
    };
    // Remove all elements from queue
    clear() {
      console.log('before ', this.putElement)
      this.putElement = [];
      this.frontCounter = 0;
      console.log('after ', this.putElement)
    };
  };

  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.dequeue();
  queue.dequeue();
  queue.enqueue(5);
  queue.enqueue(6);
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  
  console.log(queue.isEmpty());
  queue.first();
  queue.clear();
  queue.enqueue(3);
  queue.dequeue();