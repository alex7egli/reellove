import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'movie-swipe-screen',
  templateUrl: './movie-swipe-screen.component.html',
  styles: ['']
})
export class MovieSwipeScreenComponent {
  selectedUser: string = 'user1';
  movie?: any;

  constructor(private dataService: DataService) {
    this.selectedUser = this.dataService.selectedUser;
    this.pickRandomMovie();
  }

  pickRandomMovie() {
    const randInt = Math.floor(Math.random() * this.dataService.moviesList.length);
    this.movie = this.dataService.moviesList[randInt];
  }

  movieSelect(didLike: boolean) {
    this.dataService.likedMoviesByUserId[this.selectedUser][this.movie.name] = didLike;
    this.pickRandomMovie();
  }
}