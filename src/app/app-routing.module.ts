import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteScreenComponent } from './favorite-screen/favorite-screen.component';
import { MovieSwipeScreenComponent } from './movie-swipe-screen/movie-swipe-screen.component';
import { UserSelectScreenComponent } from './user-select-screen/user-select-screen.component';

const routes: Routes = [
  { path: 'favorite', component: FavoriteScreenComponent },
  { path: 'movie-swipe', component: MovieSwipeScreenComponent },
  { path: 'user-select', component: UserSelectScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
