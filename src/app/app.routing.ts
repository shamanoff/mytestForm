import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";
import {ProtectedComponent} from "./protected/protected.component";
import {FormComponent} from "./form/form.component";
import {AuthGuard} from "./shared/auth.guard";

const APP_ROUTES: Routes =  [
{path: '', redirectTo: '/signup', pathMatch: 'full'},
{path: 'signup', component: FormComponent},
{path: 'signin', component: SigninComponent},
{path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}



];

export const routing = RouterModule.forRoot(APP_ROUTES);
