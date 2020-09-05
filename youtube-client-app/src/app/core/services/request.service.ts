import { Injectable, EventEmitter } from '@angular/core';
import { responseYouTube } from '../../mocked/mocked-response';
import { ISearchResponse } from '../../models/search-response.model';
import { IResponseItem } from '../../models/response-item.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { retry, map, combineAll } from 'rxjs/operators';

@Injectable()
export class RequestService {

  public onResponseArrived: EventEmitter<ISearchResponse> = new EventEmitter();

  public items: IResponseItem[] = null;

  constructor(private http: HttpClient) { }

  public getResponse(queryString: string): void {
    const firstParams: HttpParams = new HttpParams()
      .set('key', environment.API_KEY);

    this.http
      .get<ISearchResponse>(`${environment.API_URL}/search`, {
        params: firstParams
        .set('type', 'video')
        .set('part', 'snippet')
        .set('maxResults', '15')
        .set('q', queryString)
      })
      .pipe(
        retry(4),
        map(response => {
          let id: string[] = [];
          response.items.forEach(item => {
            id.push(item.id.videoId);
          });
          return this.http
            .get<ISearchResponse>(`${environment.API_URL}/videos`, {
              params: firstParams
                .set('id', id.join(','))
                .set('part', 'snippet,statistics')
            });
        }),
      )
      .subscribe(response => response.subscribe(resp => this.items = resp.items));
  }
}
