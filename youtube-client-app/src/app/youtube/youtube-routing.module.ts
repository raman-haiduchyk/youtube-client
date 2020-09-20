import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '@youtube/components/admin/admin.component';
import { DetailedInfoComponent } from '@youtube/components/detailed-info/detailed-info.component';
import { SearchListComponent } from '@youtube/components/search-list/search-list.component';

const routes: Routes = [
  { path: '', component: SearchListComponent },
  { path: 'admin', component: AdminComponent },
  { path: ':id', component: DetailedInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
