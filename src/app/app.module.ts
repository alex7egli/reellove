import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSwipeScreenComponent } from './movie-swipe-screen/movie-swipe-screen.component';
import { UserSelectScreenComponent } from './user-select-screen/user-select-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSwipeScreenComponent,
    UserSelectScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
