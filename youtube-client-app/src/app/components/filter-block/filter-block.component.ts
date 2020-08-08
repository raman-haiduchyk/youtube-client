import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent {

  public dateArrowChar: string = null;
  public viewArrowChar: string = null;

  constructor(private filterService: FilterService) { }

  public changeDateFilterState(): void {
    this.filterService.changeDateFilter();
    this.viewArrowChar = null;
    if (this.filterService.dateFilter) {
      this.dateArrowChar = '🠅';
    } else {
      this.dateArrowChar = '🠇';
    }
  }

  public changeViewFilterState(): void {
    this.filterService.changeViewFilter();
    this.dateArrowChar = null;
    if (this.filterService.viewFilter) {
      this.viewArrowChar = '🠅';
    } else {
      this.viewArrowChar = '🠇';
    }
  }
}
