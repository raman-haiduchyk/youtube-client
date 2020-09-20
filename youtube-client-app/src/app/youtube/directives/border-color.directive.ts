import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateToBorderColor]'
})
export class BorderColorDirective implements OnInit {

  @Input('appDateToBorderColor')
  public date: string;

  public color: string = 'brown';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  public ngOnInit(): void {
    let timeInterval: number = Number(new Date()) - Number(new Date(this.date));
    if (timeInterval < 1000 * 60 * 60 * 24 * 7) {   // week
      this.color = 'blue';
    } else if (timeInterval < 1000 * 60 * 60 * 24 * 30) {   // month
      this.color = 'green';
    } else if (timeInterval < 1000 * 60 * 60 * 24 * 30 * 6) {   // 6 months
      this.color = 'yellow';
    }
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom-color', this.color);
  }
}
