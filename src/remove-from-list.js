const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let curentNode = l;
  let preCurentnode;  
  while(curentNode){

     if(curentNode.value === k){
       if(curentNode.next){
         curentNode.value = curentNode.next.value;
         curentNode.next = curentNode.next.next;
       }
       else {
         if(preCurentnode) preCurentnode.next = null;
          curentNode.value = null;
       }
     }


      else{
         if(curentNode.next) {
          preCurentnode = curentNode;
          curentNode = curentNode.next;
         } 
         else break;
      }
  }
  return l;
}

module.exports = {
  removeKFromList
};
