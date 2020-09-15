import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { YoutubeRoutingModule } from '@youtube/youtube-routing.module';

import { DetailedInfoComponent } from '@youtube/components/detailed-info/detailed-info.component';
import { SearchItemComponent } from '@youtube/components/search-item/search-item.component';
import { SearchListComponent } from '@youtube/components/search-list/search-list.component';
import { AdminComponent } from '@youtube/components/admin/admin.component';

import { BorderColorDirective } from '@youtube/directives/border-color.directive';

import { FilterPipe } from '@youtube/pipes/filter.pipe';

import { SharedModule } from '@shared/shared.module';

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
