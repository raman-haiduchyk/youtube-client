import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';

import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { AdminComponent } from './components/admin/admin.component';

import { BorderColorDirective } from './directives/border-color.directive';

import { FilterPipe } from './pipes/filter.pipe';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchListComponent,
    SearchItemComponent,
    DetailedInfoComponent,
    AdminComponent,
    BorderColorDirective,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchListComponent,
    SearchItemComponent,
    DetailedInfoComponent,
    AdminComponent,
    BorderColorDirective,
    FilterPipe
  ]
})
export class YoutubeModule { }
