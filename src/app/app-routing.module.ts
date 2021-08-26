import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSwipeScreenComponent } from './movie-swipe-screen/movie-swipe-screen.component';
import { UserSelectScreenComponent } from './user-select-screen/user-select-screen.component';

const routes: Routes = [
  { path: 'movie-swipe', component: MovieSwipeScreenComponent },
  { path: '', component: UserSelectScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
