const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this;
  }

  enqueue(value ) {
     if(!this.value) {
       this.value = value;
       this.next = null;
       return;
     }
     
     let curentNode = this;
     while(curentNode){
      if(!curentNode.next){
          curentNode.next = new ListNode(value);
          return;
      }
      else{
          curentNode = curentNode.next;
      }
     }

  }

  dequeue() {
  let returnValue;     
    if(this.value){
      returnValue = this.value;
      if(this.next){
          this.value = this.next.value;
          this.next = this.next.next;
      }
      else{
        
      }
      return returnValue;
    }
    return null;
  }
}

module.exports = {
  Queue
};
