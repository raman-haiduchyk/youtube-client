import { ActionReducerMap } from '@ngrx/store';
import { customVideoCardReducer } from '@redux/reducers/custom-video-cards.reducer';
import { videoCardReducer } from '@redux/reducers/video-cards.reducer';
import { IAppState } from '@redux/state/app.state';

export const appReducers: ActionReducerMap<IAppState> = {
  videoCards: videoCardReducer,
  customVideoCards: customVideoCardReducer
};
