import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {

  @Input('appBorderColor')
  public color: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  public ngOnInit(): void {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom-color', this.color);
    console.log(this.color);
  }
}
