import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRestyle]'
})
export class RestyleDirective {

  constructor(private el: ElementRef) {}
  @HostListener('click') click() {
    this.el.nativeElement.style.backgroundColor = this.custom.bgColor;
    this.el.nativeElement.style.color = this.custom.fgColor;
    this.el.nativeElement.style.fontFamily = this.custom.fFamily;
  }
  @Input('appRestyle') custom: any;
}