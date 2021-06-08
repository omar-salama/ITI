import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent {
  name:string = '';
  age:number = 0;
  students:{name:string, age:number}[] = []; 
  get isAgeValid() {
    return this.age >= 18 && this.age <= 50;
  }
  get isNameValid() {
    return this.name != '' && this.name.length >= 3;
  }
  addEntry(){
    let student:{name:string, age:number} = {name:this.name, age:this.age};
    if (this.isAgeValid && this.isNameValid) {
      this.students.push(student);
      
    }
  }

}
