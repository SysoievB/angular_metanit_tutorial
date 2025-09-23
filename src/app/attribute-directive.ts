import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: "[bold]",
  standalone: true,
  /*
  * Вместо применения декораторов HostListener и HostBinding для реагирования
  * директивы на действия пользователя мы можем определить обработчики событий
  * в декораторе Directive с помощью его свойства host
  * */
  host: {
    "(mouseenter)": "onMouseEnter()",
    "(mouseleave)": "onMouseLeave()"
  }
})
export class AttributeDirective {
/*--custom attribute directive--*/
  @Input() selectedSize = "38px";
  @Input() defaultSize = "16px";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef.nativeElement.style.fontWeight = "bold";
    this.elementRef.nativeElement.style.color = "green";
    this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
  }

  onMouseEnter(){
    this.setFontWeight("bold");
  }
  onMouseLeave(){
    this.setFontWeight("normal");
  }
  private setFontWeight(val: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
  }

  /*
  * private fontWeight = "normal";

    @HostBinding("style.fontWeight") get getFontWeight(){
        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor(){
        return "pointer";
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight ="bold";
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
    }*/
}
