import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './youtube/components/search-list/search-list.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { DetailedInfoComponent } from './youtube/components/detailed-info/detailed-info.component';
import { AuthGuard } from './guards/auth.guard';
import { AlreadyAuthGuard } from './guards/already-auth.guard';
import { AuthorizationFormComponent } from './auth/components/authorization-form/authorization-form.component';

const routes: Routes = [
   { path: '', redirectTo: 'main', pathMatch: 'full'},
   { path: 'main', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule), canLoad: [AuthGuard]},
   { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canLoad: [AlreadyAuthGuard]},
   { path: 'not-found', component: NotFoundComponent},
   { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
