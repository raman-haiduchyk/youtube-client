import { Injectable, EventEmitter } from '@angular/core';
import { responseYouTube } from '../mocked/mocked-response';
import { ISearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public onResponseArrived: EventEmitter<ISearchResponse> = new EventEmitter();

  constructor() { }

  public getResponse(): void {
    this.onResponseArrived.emit(responseYouTube);
  }
}
