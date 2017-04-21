import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './app.routing';
import { SigninComponent } from './signin/signin.component';
import { ProtectedComponent } from './protected/protected.component';
import {AuthService} from "./shared/auth.service";
import {AuthGuard} from "./shared/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormComponent,
    HeaderComponent,
    SigninComponent,
    ProtectedComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
