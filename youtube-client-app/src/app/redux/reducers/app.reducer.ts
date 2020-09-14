import { customVideoCardReducer } from './custom-video-cards.reducer';
import { videoCardReducer } from './video-cards.reducer';
import { Action, ActionReducerMap } from '@ngrx/store';
import { IAppState, initialAppState } from '../state/app.state';
import { SetCustomVideoCards } from '../actions/custom-video-cards.action';

export const appReducers: ActionReducerMap<IAppState> = {
  videoCards: videoCardReducer,
  customVideoCards: customVideoCardReducer
};
