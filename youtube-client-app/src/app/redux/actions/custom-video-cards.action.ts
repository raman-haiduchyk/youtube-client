import { Action } from '@ngrx/store';

import { IResponseItem } from '../../models/response-item.model';
import { ISearchResponse } from '../../models/search-response.model';

export enum CustomVideoCardsActionTypes {
  setCustomCards = 'getCustomCards'
}

export class SetCustomVideoCards implements Action {
  public readonly type: CustomVideoCardsActionTypes = CustomVideoCardsActionTypes.setCustomCards;
  constructor (public payload: IResponseItem) { }
}
