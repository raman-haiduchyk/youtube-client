import { IVideoCardsState, initialVideoCardsState } from '../state/video-cards.state';
import { CustomVideoCardsActionTypes, SetCustomVideoCards } from '../actions/custom-video-cards.action';

export function customVideoCardReducer (
  state: IVideoCardsState = initialVideoCardsState,
  action: SetCustomVideoCards): IVideoCardsState {

  switch (action.type) {
    case CustomVideoCardsActionTypes.setCustomCards: {
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
