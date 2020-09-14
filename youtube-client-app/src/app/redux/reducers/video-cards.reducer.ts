import { IVideoCardsState, initialVideoCardsState } from '../state/video-cards.state';
import { GetAPIVideoCards, SetNewVideoCards, VideoCardsActionTypes } from '../actions/video-cards.action';
import { State, Action } from '@ngrx/store';
import { SetCustomVideoCards } from '../actions/custom-video-cards.action';

export function videoCardReducer (
  state: IVideoCardsState = initialVideoCardsState,
  action: SetNewVideoCards): IVideoCardsState {

  switch (action.type) {
    case VideoCardsActionTypes.setAPICards: {
      return {
        ...state,
        cards: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
