import { Injectable, EventEmitter } from '@angular/core';
import { responseYouTube } from '../../mocked/mocked-response';
import { ISearchResponse } from '../../models/search-response.model';
import { IResponseItem } from '../../models/response-item.model';

@Injectable()
export class RequestService {

  public onResponseArrived: EventEmitter<ISearchResponse> = new EventEmitter();

  public items: IResponseItem[] = null;

  constructor() { }

  public getResponse(): void {
    this.items = responseYouTube.items;
  }
}
