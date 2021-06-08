import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.min(21), Validators.max(50)])
  })

  get name() { return this.registerForm.get('name'); }
  get age() { return this.registerForm.get('age'); }

  validName() {
    return this.registerForm.get('name')?.valid;
  }
  validAge() {
    return this.registerForm.get('age')?.valid;
  }

  @Output() myEvent = new EventEmitter();

  sendData() {
    if (this.registerForm.valid) {
      let dataObj: { name: string, age: number } = { name: this.name?.value, age: this.age?.value };
      this.myEvent.emit(dataObj);
    }
  }
}
