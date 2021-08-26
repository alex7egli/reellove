import { Component } from '@angular/core';
import { DataService, IUser } from '../services/data.service';

@Component({
  selector: 'movie-swipe-screen',
  templateUrl: './movie-swipe-screen.component.html',
  styles: ['']
})
export class MovieSwipeScreenComponent {
  selectedUser: IUser = this.dataService.users[0];
  movie?: any;

  constructor(private dataService: DataService) {
    this.selectedUser = this.dataService.selectedUser;
    this.pickRandomMovie();
  }

  pickRandomMovie() {
    const randInt = this.dataService.randomIndices[this.selectedUser.indexInMovieList];
    this.movie = this.dataService.moviesList[randInt];
  }

  movieSelect(didLike: boolean) {
    this.dataService.likedMoviesByUserId[this.selectedUser.id][this.movie.name] = didLike;
    this.dataService.incrementRandomInt(this.selectedUser);
    this.pickRandomMovie();
  }
}