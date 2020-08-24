import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterBlockComponent } from './components/filter-block/filter-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FilterService } from './services/filter.service';
import { FilterPipe } from './pipes/filter.pipe';
import { BorderColorDirective } from './directives/border-color.directive';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { RequestService } from './services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    SearchItemComponent,
    AuthorizationFormComponent,
    HeaderComponent,
    FilterBlockComponent,
    FilterPipe,
    BorderColorDirective,
    DetailedInfoComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FilterService, LoginService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
