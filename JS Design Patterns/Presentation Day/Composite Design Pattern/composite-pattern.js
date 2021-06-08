// **** The Interface **** //
class Component {
  constructor(name) {
    this._name = name;
  }

  getNodeName() {
    return this._name;
  }

  // abstract methods that need to be overridden (simmulating a real interface)
  getType() {}

  addChild(component) {}

  noOfChildren() {}

  
  // helper methods to keep track of our tree structure
  getChildByIndex(index) {}

  static logTreeStructure(root) {
    let treeStructure = "";
    function traverse(node, indent = 0) {
      treeStructure += `${"--".repeat(indent)}${node.getNodeName()}\n`;
      indent++;
      for (let i = 0, length = node.noOfChildren(); i < length; i++) {
        traverse(node.getChildByIndex(i), indent);
      }
    }
    traverse(root);
    return treeStructure;
  }
}

class Leaf extends Component {
  constructor(name) {
    super(name);
    this._type = "Leaf Node";
  }

  getType() {
    return this._type;
  }

  noOfChildren() {
    return 0;
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this._type = "Composite Node";
    this._children = [];
  }

  getType() {
    return this._type;
  }

  addChild(component) {
    this._children = [...this._children, component];
  }

  getChildByIndex(index) {
    return this._children[index];
  }

  noOfChildren() {
    return this._children.length;
  }
}

// usage

const tree = new Composite("root");
tree.addChild(new Leaf("left-leaf"));

const right = new Composite("right-comp");
tree.addChild(right); // end of first layer

right.addChild(new Leaf("right-left-leaf"));
const rightRight = new Composite("right-right-comp");
right.addChild(rightRight);

// right.addChild(new Leaf("right-right-end"))

console.log(right.noOfChildren());

// log
console.log(Component.logTreeStructure(tree));
/*
  root
  --left-leaf
  --right-comp
  ----right-left-leaf
  ----right-right-comp
  */
