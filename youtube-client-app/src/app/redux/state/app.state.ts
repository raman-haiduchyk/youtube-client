import { RouterReducerState } from '@ngrx/router-store';

import { IVideoCardsState, initialVideoCardsState } from './video-cards.state';

export interface IAppState {
  router?: RouterReducerState;
  videoCards: IVideoCardsState;
  customVideoCards: IVideoCardsState;
}

export const initialAppState: IAppState = {
  videoCards: initialVideoCardsState,
  customVideoCards: initialVideoCardsState
};
