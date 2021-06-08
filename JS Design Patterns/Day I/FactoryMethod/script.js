import { Developing } from './Developing.js';
import { Testing } from './Testing.js';
import { Designers } from './Designers.js';
import { QualityControl } from './QualityControl.js';
function Employees() {
    var employees = [];
    this.createEmp = function (name, type, isLeader=false) {
      switch (type) {
        case "Developer":
          employees.push(new Developing(name, isLeader));
          break;
        case "Tester":
          employees.push(new Testing(name, isLeader));
          break;
        case "Quality Control":
          employees.push(new QualityControl(name, isLeader));
          break;
        case "Designer":
          employees.push(new Designers(name, isLeader));
          break;
      }
    };
    this.getEmployees = function() {
        return employees;
    }
  }

  var emps = new Employees();
  var emp1 = emps.createEmp("Omar", "Developer", true);
  var emp1 = emps.createEmp("Abyu", "Developer");
  var emp2 = emps.createEmp("Pablo", "Tester");
  var emp3 = emps.createEmp("Ess", "Designer", true);
    // var emp1 = emps.createEmp("Ahmed", "Designer", true);

  console.log(emps.getEmployees());