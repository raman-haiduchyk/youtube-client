import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterBlockComponent  } from './components/filter-block/filter-block.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { FilterService } from './services/filter.service';
import { LoginService } from './services/login.service';
import { RequestService } from './services/request.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FilterBlockComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FilterBlockComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  providers: [
    FilterService,
    LoginService,
    RequestService
  ]
})
export class CoreModule { }
