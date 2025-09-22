import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: "[bold]",
  standalone: true
})
export class AttributeDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = "bold";
    this.elementRef.nativeElement.style.color = "green";
  }
}
