import { Component } from '@angular/core';
import { IResponseItem } from '../../../models/response-item.model';
import { FilterService } from '../../../core/services/filter.service';
import { RequestService } from '../../../core/services/request.service';
import { IAppState } from 'src/app/redux/state/app.state';
import { getVideoCards } from '../../../redux/selectors/video-cards.selector';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  public responseItems: IResponseItem[] = null;

  public dateFilterState: boolean = null;
  public viewFilterState: boolean = null;
  public wordFilterState: string = null;
  public videos$: Observable<IResponseItem[]>;

  constructor(private filterService: FilterService, public requestService: RequestService, store: Store<IAppState>) {
    filterService.onFilterChange.subscribe((filters) => {
      this.dateFilterState = filters[0];
      this.viewFilterState = filters[1];
      this.wordFilterState = filters[2];
    });

    this.videos$ = store.select(getVideoCards);
  }

}
