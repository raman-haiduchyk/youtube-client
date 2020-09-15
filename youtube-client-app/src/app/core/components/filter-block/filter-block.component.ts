import { Component, AfterViewInit } from '@angular/core';
import { FilterService } from '@core/services/filter.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent implements AfterViewInit {

  public dateArrowChar: string = null;
  public viewArrowChar: string = null;

  public filterInputSub: Subscription;

  constructor(private filterService: FilterService) { }

  public ngAfterViewInit(): void {

    this.filterInputSub = fromEvent(document.getElementById('filter-input'), 'input')
    .pipe(
      map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged())
    .subscribe(inputValue => {
      this.filterService.changeWordFilter(inputValue);
      this.dateArrowChar = null;
      this.viewArrowChar = null;
    });

  }

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
