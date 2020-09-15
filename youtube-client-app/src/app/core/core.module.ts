import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import { FilterBlockComponent  } from './components/filter-block/filter-block.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { FilterService } from './services/filter.service';
import { LoginService } from './services/login.service';
import { RequestService } from './services/request.service';

import { appReducers } from '../redux/reducers/app.reducer';
import { VideoCardsEffect } from '../redux/effects/video-cards.effect';

@NgModule({
  declarations: [
    FilterBlockComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([VideoCardsEffect])
  ],
  exports: [
    FilterBlockComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  providers: [
    FilterService,
    LoginService,
    RequestService,
    // { provide: HTTP_INTERCEPTORS, useClass: ApiRequestInterceptor, multi: true },
  ]
})
export class CoreModule { }
