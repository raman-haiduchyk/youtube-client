import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchListComponent } from './components/search-list/search-list.component';

import { BorderColorDirective } from './directives/border-color.directive';

import { FilterPipe } from './pipes/filter.pipe';

import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    SearchListComponent,
    SearchItemComponent,
    DetailedInfoComponent,
    BorderColorDirective,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchListComponent,
    SearchItemComponent,
    DetailedInfoComponent,
    BorderColorDirective,
    FilterPipe
  ]
})
export class YoutubeModule { }
