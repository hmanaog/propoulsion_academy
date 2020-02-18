class Stack {
    constructor(element) {
      // TODO
      this.element = element;
      this.putElement = [];
      this.spliceIndex = 0;
      this.spliceDelete = 0;
      this.topCounter = 0;
    };
    // Pushes a new element on top of the stack
    push(element) {
      // TODO
        this.topCounter++
        this.spliceIndex = this.topCounter
        this.putElement.splice(this.spliceIndex, this.spliceDelete, element)
        console.log(this.putElement)
    };
    // Removes the top most element from the stack and returns that element
    pop() {
      // TODO
      //console.log('putelement.length: ', this.putElement.length)
      this.topCounter = this.putElement.length
      //console.log('popcounter: ', this.popCounter)
      this.topCounter--
      this.spliceDelete = 1;
      this.putElement.splice(this.topCounter, this.spliceDelete)
      console.log(this.putElement)
    };
    // Returns the top-most element, but doesn't change the stack
    top() {
      // TODO
        console.log('Top-most Element: ', this.putElement[this.topCounter-1])
        console.log('topCounter: ', this.topCounter)
    };
    // Returns true if stack has no elements in it, otherwise false
    isEmpty() {
      // TODO
      if (this.putElement.length === 0) {
          return true
      }
      return false
    };
    // Removes all elements from the stack
    clear() {
      // TODO
      console.log('Before delete: ', this.putElement)
      this.putElement = []
      this.topCounter = 0;
      console.log('After delete: ', this.putElement)
    };
  };

  const element = new Stack()
  element.push(1)
  element.push(2)
  element.push(6)
  element.push(3)
  element.pop()
  element.pop()
  element.push(3)
  element.push(8)
  element.push(10)
  element.push(20)
  element.pop()
  element.pop()
  element.pop()
  element.pop()
  element.push(34)
  element.pop()
  element.push(55)
  element.pop()
  console.log(element.isEmpty())
//  element.top()
element.clear()
element.push(1)