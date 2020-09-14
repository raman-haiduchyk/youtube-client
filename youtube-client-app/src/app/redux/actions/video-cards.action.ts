import { Action } from '@ngrx/store';

import { IResponseItem } from '../../models/response-item.model';
import { ISearchResponse } from '../../models/search-response.model';

export enum VideoCardsActionTypes {
  setAPICards = 'setAPICards',
  getAPICards = 'getAPICards',
}

export class GetAPIVideoCards implements Action {
  public readonly type: VideoCardsActionTypes = VideoCardsActionTypes.getAPICards;
  constructor (public payload: string) {}
}

export class SetNewVideoCards implements Action {
  public readonly type: VideoCardsActionTypes = VideoCardsActionTypes.setAPICards;
  constructor (public payload: IResponseItem[]) {}
}
