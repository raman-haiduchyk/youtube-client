import { Action } from '@ngrx/store';
import { IResponseItem } from '@core/models/response-item.model';

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
