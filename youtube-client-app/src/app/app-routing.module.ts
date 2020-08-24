import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './components/search-list/search-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
   { path: '', redirectTo: 'main', pathMatch: 'full'},
   { path: 'main', component: SearchListComponent, canActivate: [AuthGuard]},
   { path: 'main/:id', component: DetailedInfoComponent},
   { path: 'login', component: AuthorizationFormComponent},
   { path: 'not-found', component: NotFoundComponent},
   { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
