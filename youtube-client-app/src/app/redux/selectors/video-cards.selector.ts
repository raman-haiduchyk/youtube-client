import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IVideoCardsState } from '../state/video-cards.state';

// tslint:disable-next-line
const selectAPI = (state: IAppState) => state.videoCards;

// tslint:disable-next-line: typedef
const selectCustom = (state: IAppState) => state.customVideoCards;

// tslint:disable-next-line
export const getAllVideoCards = createSelector(
  selectAPI,
  selectCustom,
  (stateAPI: IVideoCardsState, stateCustom: IVideoCardsState) => [...stateCustom.cards, ...stateAPI.cards]
);
