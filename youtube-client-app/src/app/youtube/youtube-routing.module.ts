import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { SearchListComponent } from './components/search-list/search-list.component';

const routes: Routes = [
  { path: '', component: SearchListComponent },
  { path: ':id', component: DetailedInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
