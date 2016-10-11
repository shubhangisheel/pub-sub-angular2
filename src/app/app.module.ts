import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routing';

import { AppComponent } from './components/app.component';
import {HomeContentComponent} from './components/home-content.component';
import {SimpleGetPostComponent} from './components/simple-get-post.component';
import {SecureDataComponent} from './components/secure-data.component';
import {UserLoginComponent} from './components/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    SimpleGetPostComponent,
    SecureDataComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
