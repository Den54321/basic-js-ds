const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor (value) {
      this.rot = null;
  }

  root() {
    return this.rot;
  }

  add(data) {
    let newNode = new Node (data);
    if(!this.rot){
      this.rot = newNode;
      return;
    }

    let curentNode = this.rot;

    while(curentNode){
      if(newNode.data < curentNode.data){
        if(!curentNode.left){
          curentNode.left = newNode;
          return;
        }
        curentNode = curentNode.left;
        }
        else{

          if(!curentNode.right){
            curentNode.right = newNode;
            return;
          }    
          curentNode = curentNode.right;

        }
      }

  }
  addToNode(node){
    let curentNode = this;

    while(1)
    {
      if(node.data < curentNode.data){
        if(!curentNode.left) { curentNode.left = node; return;}
        curentNode = curentNode.left;
      }
      else{
        if(!curentNode.right) { curentNode.right = node; return;}
        curentNode = curentNode.right
      }
    }
    
  }
  

  has(data) {
    let curentNode = this.rot;

    while(1){
      if(curentNode.data === data) return true;
      
      if(data < curentNode.data){
        if(!curentNode.left) return false;
        curentNode = curentNode.left;
      }

      else{
        if(!curentNode.right) return false;
        curentNode = curentNode.right;
      }

    }

    
  }

  find(data ) {
    let curentNode = this.rot;

    while(1){
      if(curentNode.data === data) return curentNode;
      if(data < curentNode.data){
        if(!curentNode.left) return null;
        curentNode = curentNode.left;
      }
      else{
        if(!curentNode.right) return null;
        curentNode = curentNode.right;
      }
      
    }


    
  }

  remove(data) {
    if(!this.has(data)) return;
    let preCurentNode;
    let curentNode = this.rot;

    while(1){
      if(data === curentNode.data){
        if(!curentNode.left && !curentNode.right){
          if(preCurentNode.left === curentNode) {
            preCurentNode.left = null;
          }
          else{
            preCurentNode.right = null;
          }
          return;
        }
        

      }
      
      if(data < curentNode.data){
        if(!curentNode.left) return false;
        preCurentNode = curentNode;
        curentNode = curentNode.left;
      }

      else{
        if(!curentNode.right) return false;
        preCurentNode = curentNode;
        curentNode = curentNode.right;
      }

    }
   
  }

  preOrder(node, callback){
    if(!node) return;
    if(callback) callback(node.data);
    this.preOrder(node.left, callback)
    this.preOrder(node.right, callback)

  }

  min() {
    let res  = [];
    this.preOrder(this.rot, (value) =>{ res.push(value); })
    res.sort((a, b) =>{ return a - b});
    return res.length === 0 ? null : res[0];
  }

  max() {
    let res  = [];
    this.preOrder(this.rot, (value) =>{ res.push(value); })
    res.sort((a, b) =>{ return b - a});
    return res.length === 0 ? null : res[0];
  
  }

}

module.exports = {
  BinarySearchTree
};