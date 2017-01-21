import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToPostsComponent } from './components/to-posts/to-posts.component';
import { ToNewsComponent } from './components/to-news/to-news.component';

@NgModule({
  declarations: [
    AppComponent,
    ToPostsComponent,
    ToPostsComponent,
    ToNewsComponent
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
