import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent }      from './register/register.component';
import { LoginComponent }      from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  { path: '', redirectTo: '/web', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'root', component: RootComponent },
  { path: 'home', component: HomeComponent },
  { path: 'web', component: WebComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}