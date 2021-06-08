const fs = require("fs");
switch (process.argv[2]) {
  case "generate":
  case "g":
    switch (process.argv[3]) {
      case "component":
      case "c":
        fs.mkdir(
          `${process.cwd()}/${process.argv[4]}`,
          (err) => {
            if (err) throw err;
          }
        );
        fs.writeFile(
          `${process.cwd()}/${process.argv[4]}/${process.argv[4]}.component.ts`,
          ` 
            import { Component, OnInit } from '@angular/core';
      
            @Component({
              selector: '${process.argv[4]}',
              templateUrl: './${process.argv[4]}.html',
              styleUrls: ['./${process.argv[4]}.css']
            })
            export class ${process.argv[4]} implements OnInit {
          
            constructor() { }
          
            ngOnInit(): void {
            }
        
          }`.replace(/  +/g, ''),
          (err) => {
            if (err) throw err;
          }
        );
        fs.writeFile(
          `${process.cwd()}/${process.argv[4]}/${process.argv[4]}.component.html`,
          '',
          (err) => {
            if (err) throw err;
          }
        );
        fs.writeFile(
          `${process.cwd()}/${process.argv[4]}/${process.argv[4]}.component.css`,
          '',
          (err) => {
            if (err) throw err;
          }
        );
        if (process.argv[5] != "--skip-tests") {
          fs.writeFile(
            `${process.cwd()}/${process.argv[4]}/${process.argv[4]}.component.spec.ts`,
            '',
            (err) => {
              if (err) throw err;
            }
          );
        }
        break;
      default:
        console.log("Wrong command.");
    }
    break;
  default:
    console.log("Wrong command.");
}
