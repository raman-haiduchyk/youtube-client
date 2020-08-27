import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ AuthorizationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ AuthorizationFormComponent ]
})
export class AuthModule { }
