class Set {
    constructor(element) {
      // TODO
      this.putElement = [];
    };
    // inserts an element
    insert(element) {
      // TODO
        if(this.putElement.indexOf(element) === -1) {
            this.putElement.push(element);
            console.log('Insert: ', this.putElement)
        }
    };
    // removes an element
    remove(element) {
      // TODO
      this.putElement.splice(this.putElement.indexOf(element), 1);
      console.log("remove: ", this.putElement)
    };
    // checks if an element exists in the set
    has(element) {
      // TODO
      if(this.putElement.indexOf(element) === -1) {
          console.log("Dont have the same number")
      } else {
          console.log("it has the same number")
      }
    };
    // returns array of all entries
    all() {
      // TODO
      console.log('All entries: ', this.putElement)
    };
    // returns the number of all entries
    length() {
      // TODO
      console.log('Length of array: ', this.putElement.length)
    };
  };

  const set = new Set();
  
  set.insert(1);
  set.insert(2);
  set.insert(3);
  set.insert(4);
  set.insert(5);
  set.remove();
  set.remove();

  set.has(6);

  set.all();

  set.length()