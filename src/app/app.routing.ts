/**
 * Created by shubhangisheel on 2016-10-11.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserLoginComponent} from './components/user-login.component';
import {HomeContentComponent} from './components/home-content.component';

const appRoutes: Routes = [
  {path:'',component : HomeContentComponent},
  {path:'userLogin', component: UserLoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


