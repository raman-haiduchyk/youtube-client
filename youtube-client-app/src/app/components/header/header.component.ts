import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public filterIsShown: boolean = false;

  constructor() { }

  public showFilter(): void {
    this.filterIsShown = !this.filterIsShown;
  }

}
