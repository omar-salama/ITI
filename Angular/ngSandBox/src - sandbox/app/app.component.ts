import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sandbox';
  stdData: { name: string; age: number }[] = [];

  getData(data: any) {
    this.stdData.push(data);
    // console.log(this.stdData);
  }
}
