class Developing {
  constructor(_name, isLeader=false) {
      this.name = _name;
      this.type = "Developer";
      if (isLeader) {
        new DevelopingLeader(this.name, this.type);
      }
    }
  }
  class DevelopingLeader {
    constructor(name, type) {
      if (DevelopingLeader.instance != null) {
        throw 'Can\'t make more that one instance.'
      }
      this.name = name;
      this.type = type;
      DevelopingLeader.instance = this;
    }
  }