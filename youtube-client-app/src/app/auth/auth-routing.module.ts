import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';

const routes: Routes = [
  { path: '', component: AuthorizationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
