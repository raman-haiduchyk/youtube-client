import { Component } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { IResponseItem } from '../../models/response-item.model';
import { responseYouTube } from '../../mocked/mocked-response';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  public responseData: ISearchResponse = responseYouTube;
  public responseItems: IResponseItem[] = responseYouTube.items;

  public dateFilterState: boolean = null;
  public viewFilterState: boolean = null;
  public wordFilterState: string = null;

  constructor(private filterService: FilterService) {
    filterService.emitter.subscribe((filters) => {
      this.dateFilterState = filters[0];
      this.viewFilterState = filters[1];
      this.wordFilterState = filters[2];
      console.log(this);
    });
  }

}
