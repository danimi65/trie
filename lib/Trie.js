//jshint esversion: 6
/**
 * Create a Class Trie
 * that can work with a trie data structure


 *
 * Instance Methods
 *
 * add( word )
 * @param word  string
 * @returns void
 *
 * exists( word )
 * @param word  string
 * @returns boolean
 *          true if the word exists in the trie, else false

 */


// a node is something with 3 values
// value (single value)
//  leaf (is end of word)
//children (store references to child nodes)

// root: {
  // leaf: false,
  // children: {
    // "c" : {
    //   leaf: false,
    //   children: {
          // "a" : {
          //   leaf: false,
          //   children: {
          //     "t": {
          //       leaf: true,
          //       children: {}
          //     }
          //   }
          // }

    //   }
    // }

  // }

// }

// "c" : {
//   leaf: false,
//   children: {
//     every key is a child node 
      // "a" : node
      // "r": node
//   }
// }

// let util = require('util');

 module.exports = class Trie {
  constructor(){
    // set up internal data store
    this.root = _createNode;

  }

  _createNode(){
    return{
      leaf: false,
      children: {}
    };
  }

  //purpose: store word in our internal datastore (root)
  add(word){
    // split up the word by each letter
    let letters = word.split('');

    //reference to parent
    //initialize parent to internal datastore
    let parent = this.root;

    //for each letter
    for(var i = 0; i < letters.length; i++){
      // check if this node exists as a child of parent 
      if( !parent.children.hasOwnProperty(letters[i])){
        //if not then create a new node
        _createNode();

        // attach the new node letters[i] to the parent's children 
        parent.children[letters[i]] = this._createNode();

      }
      // we know that parent now has letters[i] as a child node

      //move down the tree
      parent = parent.children[letters[i]];

    }

    //set the last node as leaf = true
    parent.leaf = true;
      //check if this node exists as a child of parent
      //if not create a new node

    //going through each letter, maintain the pointer of parent 




    // this.validate(word);
    // let curNode = this.root;
    // for(var i = 0; i < word.length; i++){
    //   let curChar = word[i];
    //  if(curNode[curChar]){

    //  }

    // }

    }


  validate(word){
    if(typeof word !== 'string'){
      throw new TypeError('word must be a string');
    }

  }
  
   //reference the parent
    //split the word into each letter
    // loop through each letter
    // check if the current letter is a child of the parent
      //if true
          //change parent to the currentNode
      //  continue
    // if false
      //return false

    //check if leaf is true
      //if true
      //return true
      //if false
      //return false

  exists(word){
    //reference the parent
    let parent = this.root;

    //split the word into each letter
    let letters = word.split('');

    // loop through each letter
    for(var i = 0; i < letter.length; i++ ){
    // check if the current letter is a child of the parent
      if( parent.children.hasOwnProperty(letters[i])){
      //if true
          //change parent to the currentNode
          parent = parent.children[letters[i]];
        
      }else{
        return false;
      }
    }

    if(parent.leaf === true){
      return true;
      //  continue
    } else{
      return false;
    }
    // if false
      //return false

    //check if leaf is true
      //if true
      //return true
      //if false
      //return false


  }

    // if(word !== null ){
    //   return true;
    // } else {
    //   return false;
    // }


};


// console.log(util.inspect(trie.root), {depth: 20});



