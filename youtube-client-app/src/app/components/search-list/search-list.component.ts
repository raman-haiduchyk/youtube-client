import { Component } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { IResponseItem } from '../../models/response-item.model';
import { responseYouTube } from '../../mocked/mocked-response';
import { from } from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  public responseData: ISearchResponse = responseYouTube;

  constructor() { }

}
