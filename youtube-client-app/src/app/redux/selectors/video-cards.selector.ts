import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IVideoCardsState } from '../state/video-cards.state';

// tslint:disable-next-line
const selectAPI = (state: IAppState) => state.videoCards;

// tslint:disable-next-line
export const getVideoCards = createSelector(
  selectAPI,
  (state: IVideoCardsState) => state.cards
);
