import { Action } from '@ngrx/store';
import { ICustomItem } from 'src/app/models/custom-item.model';

import { IResponseItem } from '../../models/response-item.model';
import { ISearchResponse } from '../../models/search-response.model';

export enum CustomVideoCardsActionTypes {
  setCustomCards = 'getCustomCards'
}

export class SetCustomVideoCards implements Action {
  public readonly type: CustomVideoCardsActionTypes = CustomVideoCardsActionTypes.setCustomCards;
  constructor (public payload: ICustomItem) { }
}
