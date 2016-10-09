import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';

import {HomeContentComponent} from './components/home-content.component';
import {SimpleGetPostComponent} from './components/simple-get-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    SimpleGetPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
