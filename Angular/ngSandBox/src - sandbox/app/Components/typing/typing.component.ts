import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {

  name:string = '';
  defVal(e:any) {
    this.name = 'Changed!'
  }
}
