import { IVideoCardsState, initialVideoCardsState } from '@redux/state/video-cards.state';
import { SetNewVideoCards, VideoCardsActionTypes } from '@redux/actions/video-cards.action';

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
