class Testing {
  constructor(_name, isLeader=false) {
      this.name = _name;
      this.type = "Tester";
      if (isLeader) {
        new TestLeader(this.name, this.type);
      }
    }
  }
  class TestLeader {
    constructor(name, type) {
      if (TestLeader.instance != null) {
        throw 'Can\'t make more that one instance.'
      }
      this.name = name;
      this.type = type;
      TestLeader.instance = this;
    }
  }