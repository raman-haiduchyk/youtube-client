import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { SearchListComponent } from './components/search-list/search-list.component';

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
