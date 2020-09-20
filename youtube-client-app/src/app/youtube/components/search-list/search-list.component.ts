import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { IResponseItem } from '@core/models/response-item.model';
import { FilterService } from '@core/services/filter.service';
import { RequestService } from '@core/services/request.service';
import { ICustomItem } from '@core/models/custom-item.model';
import { IAppState } from '@redux/state/app.state';
import { getAllVideoCards } from '@redux/selectors/video-cards.selector';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  public dateFilterState: boolean = null;
  public viewFilterState: boolean = null;
  public wordFilterState: string = null;

  public videos$: Observable<(IResponseItem | ICustomItem)[]>;

  constructor(
    private filterService: FilterService,
    public requestService: RequestService,
    store: Store<IAppState>, private router: Router) {
    filterService.onFilterChange.subscribe((filters) => {
      this.dateFilterState = filters[0];
      this.viewFilterState = filters[1];
      this.wordFilterState = filters[2];
    });

    this.videos$ = store.select(getAllVideoCards);
  }

  public onAddCustomCard(): void {
    this.router.navigate(['main', 'admin']);
  }

}
