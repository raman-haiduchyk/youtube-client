import { Component } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { IResponseItem } from '../../models/response-item.model';
import { FilterService } from '../../services/filter.service';
import { RequestService } from '../../services/request.service';

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

  constructor(private filterService: FilterService, private requestService: RequestService) {
    filterService.onFilterChange.subscribe((filters) => {
      this.dateFilterState = filters[0];
      this.viewFilterState = filters[1];
      this.wordFilterState = filters[2];
    });

    requestService.onResponseArrived.subscribe((youTubeResponse: ISearchResponse) => {
      this.responseItems = youTubeResponse.items;
    });
  }

}
