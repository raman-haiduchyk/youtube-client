import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class FilterService {

  public dateFilter: boolean = null;
  public viewFilter: boolean = null;
  public wordFilter: string = null;

  public onFilterChange: EventEmitter<[boolean, boolean, string]> = new EventEmitter();

  constructor() { }

  public resetFilters(): void {
    this.dateFilter = null;
    this.viewFilter = null;
    this.wordFilter = null;
  }

  public changeDateFilter(): void {
    this.viewFilter = null;
    this.wordFilter = null;

    if (this.dateFilter != null) {
      this.dateFilter = !this.dateFilter;
    } else {
      this.dateFilter = true;
    }

    this.onFilterChange.emit([this.dateFilter, this.viewFilter, this.wordFilter]);
  }

  public changeViewFilter(): void {
    this.dateFilter = null;
    this.wordFilter = null;

    if (this.viewFilter != null) {
      this.viewFilter = !this.viewFilter;
    } else {
      this.viewFilter = true;
    }

    this.onFilterChange.emit([this.dateFilter, this.viewFilter, this.wordFilter]);
  }

  public changeWordFilter(word: string): void {
    this.dateFilter = null;
    this.viewFilter = null;
    this.wordFilter = word;

    this.onFilterChange.emit([this.dateFilter, this.viewFilter, this.wordFilter]);
  }
}
