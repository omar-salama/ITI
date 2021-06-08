class QualityControl {
  constructor(_name, isLeader=false) {
      this.name = _name;
      this.type = "Developer";
      if (isLeader) {
        new QCLeader(this.name, this.type);
      }
    }
  }
  class QCLeader {
    constructor(name, type) {
      if (QCLeader.instance != null) {
        throw 'Can\'t make more that one instance.'
      }
      this.name = name;
      this.type = type;
      QCLeader.instance = this;
    }
  }