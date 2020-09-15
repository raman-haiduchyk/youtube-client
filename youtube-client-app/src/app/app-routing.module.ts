import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AlreadyAuthGuard } from './auth/guards/already-auth.guard';

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
