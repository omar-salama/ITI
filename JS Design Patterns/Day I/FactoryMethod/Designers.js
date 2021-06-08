class Designers {
  constructor(_name, isLeader=false) {
      this.name = _name;
      this.type = "Designer";
      if (isLeader) {
        new DesignerLeader(this.name, this.type);
      }
    }
  }
  class DesignerLeader {
    constructor(name, type) {
      if (DesignerLeader.instance != null) {
        throw 'Can\'t make more that one instance.'
      }
      this.name = name;
      this.type = type;
      DesignerLeader.instance = this;
    }
  }