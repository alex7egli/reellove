import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSwipeScreenComponent } from './movie-swipe-screen/movie-swipe-screen.component';
import { UserSelectScreenComponent } from './user-select-screen/user-select-screen.component';
import { FavoriteScreenComponent } from './favorite-screen/favorite-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSwipeScreenComponent,
    UserSelectScreenComponent,
    FavoriteScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
