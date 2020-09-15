import { Action } from '@ngrx/store';
import { ICustomItem } from '@core/models/custom-item.model';

export enum CustomVideoCardsActionTypes {
  setCustomCards = 'getCustomCards'
}

export class SetCustomVideoCards implements Action {
  public readonly type: CustomVideoCardsActionTypes = CustomVideoCardsActionTypes.setCustomCards;
  constructor (public payload: ICustomItem) { }
}
