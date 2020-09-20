import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { VideoCardsActionTypes, SetNewVideoCards } from '@redux/actions/video-cards.action';
import { GetAPIVideoCards } from '@redux/actions/video-cards.action';
import { RequestService } from '@core/services/request.service';

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
