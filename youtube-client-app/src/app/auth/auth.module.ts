import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationFormComponent } from '@auth/components/authorization-form/authorization-form.component';
import { AuthRoutingModule } from '@auth/auth-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ AuthorizationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [ AuthorizationFormComponent ]
})
export class AuthModule { }
