import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './components/search-list/search-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
   { path: '', redirectTo: 'main', pathMatch: 'full'},
   { path: 'main', component: SearchListComponent, canActivate: [AuthGuard]},
   { path: 'login', component: AuthorizationFormComponent},
   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
