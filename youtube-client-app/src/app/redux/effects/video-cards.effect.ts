import {Effect, ofType, Actions} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { } from 'rxjs';
import { VideoCardsActionTypes, SetNewVideoCards } from '../actions/video-cards.action';
import { Injectable } from '@angular/core';
import { GetAPIVideoCards } from '../actions/video-cards.action';
import { RequestService } from '../../core/services/request.service';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class VideoCardsEffect {

  @Effect ()
  public getVideoCard$: Actions = this.actions$.pipe(
    ofType<GetAPIVideoCards>(VideoCardsActionTypes.getAPICards),
    switchMap( (action) => this.requestService.getAPIResponse(action.payload)),
    map (response => new SetNewVideoCards(response.items))
  );

  constructor (private actions$: Actions, private requestService: RequestService) { }
}
